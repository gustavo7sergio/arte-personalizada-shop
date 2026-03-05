# Debug Cart Issue

## Problem
The cart button "Adicionar ao carrinho" is not opening the cart drawer when clicked.

## Investigation
1. CartContext is properly set up with localStorage
2. CartProvider is wrapping the entire app
3. CartDrawer component is rendered in App.tsx
4. FloatingCartButton is rendered in App.tsx
5. CategoryPage is using the cart context correctly

## Possible Issues
1. **localStorage is not available in Vercel** - This could be a security issue or the browser might not be allowing it
2. **React Context is not being updated** - The state might not be changing
3. **Sheet component from shadcn/ui is not working** - There might be an issue with the Radix UI Sheet component

## Solution
Let me add some console.log statements to debug the issue and also add a fallback to use a simple modal instead of the Sheet component if needed.

## Next Steps
1. Add console.log to CartContext to verify state changes
2. Test the cart on the dev server
3. If it works locally, the issue is with Vercel deployment
4. If it doesn't work locally, there's a code issue
