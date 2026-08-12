const saveKey = 'pet-sim-2d-save-v1';
const rawSave = localStorage.getItem(saveKey);

if (rawSave) {
  const saveData = JSON.parse(rawSave);

  // Read old value
  const oldRebirths = saveData.rebirths;

  // Update rebirth count (e.g., 1000)
  saveData.rebirths = 10000;
  localStorage.setItem(saveKey, JSON.stringify(saveData));

  // Read updated value from storage
  const updatedSave = JSON.parse(localStorage.getItem(saveKey));
  const newRebirths = updatedSave.rebirths;

  console.log('Old rebirths count:', oldRebirths);
  console.log('New rebirths count:', newRebirths);

  // Reload page after 1.5 seconds so you can see the log output
  setTimeout(() => {
    location.reload();
  }, 1500);
} else {
  console.error(`Save key "${saveKey}" not found in localStorage.`);
}
