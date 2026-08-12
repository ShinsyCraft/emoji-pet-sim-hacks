const totalCallsPerHatch = 50; // Adjust to match the exact calls per hatch in your game
let callCount = 0;
 
// Configured roll targets
const PET_ROLL_VALUE = 1; 
const RARITY_ROLL_VALUE = 1e-89; // 0.000...001
 
Math.random = () => {
  const currentRollIndex = callCount % totalCallsPerHatch;
  callCount++;
 
  // Index 0 returns 1 for pet selection; all subsequent rolls return 1e-89 for rarity/mutations
  return currentRollIndex === 0 ? PET_ROLL_VALUE : RARITY_ROLL_VALUE;
};
 
function resetHatch() {
  callCount = 0;
  console.log('[RNG Override] Call counter reset to 0.');
}
