import { createContext, useContext, useEffect, useReducer } from 'react';

// =============================================
// CART CONTEXT — Apex Atelier
// =============================================

const CartContext = createContext(null);

const STORAGE_KEY = 'apex_atelier_cart';

// Carregar do localStorage
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    /* ignore */
  }
  return { items: [], discountRate: 0 };
}

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };

    case 'INCREASE_QTY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case 'DECREASE_QTY': {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity <= 1) {
        return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'APPLY_DISCOUNT':
      return { ...state, discountRate: action.payload };

    default:
      return state;
  }
}

// Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadCart);

  // Persistir no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  // Calcular totais
  const subtotal = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const discountValue = subtotal * state.discountRate;
  const total = Math.max(0, subtotal - discountValue);
  const itemCount = state.items.reduce((acc, i) => acc + i.quantity, 0);

  // Actions
  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const increaseQuantity = (id) => dispatch({ type: 'INCREASE_QTY', payload: id });
  const decreaseQuantity = (id) => dispatch({ type: 'DECREASE_QTY', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const applyDiscount = (rate) => dispatch({ type: 'APPLY_DISCOUNT', payload: rate });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        discountRate: state.discountRate,
        subtotal,
        discountValue,
        total,
        itemCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        applyDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
