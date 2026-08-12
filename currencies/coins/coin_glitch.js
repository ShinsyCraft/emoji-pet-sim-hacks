(() => {
  const TARGET_MONEY = 5e30;
 
  // Find any element displaying money/currency on screen
  const allElements = document.querySelectorAll('*');
  let success = false;
 
  for (const el of allElements) {
    // Access React Fiber properties on the element
    const reactKey = Object.keys(el).find(k => k.startsWith('__reactFiber$') || k.startsWith('__reactProps$'));
    if (!reactKey) continue;
 
    let fiber = el[reactKey];
    while (fiber) {
      // Search memoizedState for money properties
      if (fiber.memoizedState) {
        let state = fiber.memoizedState;
        while (state) {
          if (state.memoizedState && typeof state.memoizedState === 'object') {
            for (const key in state.memoizedState) {
              if (['money', 'coins', 'cash', 'balance'].includes(key.toLowerCase())) {
                state.memoizedState[key] = TARGET_MONEY;
                success = true;
              }
            }
          }
          state = state.next;
        }
      }
      fiber = fiber.return;
    }
  }
 
  if (success) {
    console.log("%c[Success] Updated React internal state to 5 Quintillion!", "color: #00ff00; font-weight: bold;");
  } else {
    console.log("%c[Notice] Target element not found. See Method 2.", "color: #ff9900;");
  }
})();
