//promise,async,await

const numberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Number processed successfully');
    }, 1500);
  });
  
  numberPromise.then(result => console.log(result)); // Output: Number processed successfully (after 1.5 seconds)
  
  async function processNumber() {
    const result = await numberPromise;
    console.log(result); // Output: Number processed successfully
  }
  
  processNumber();
  