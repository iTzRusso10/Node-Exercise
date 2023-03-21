const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log(`${surprisingFact} (stdout)`);
console.error(`${surprisingFact} (stderr)`);

const familyTree = [
    {
      name: "Person 1",
      children: [
        {
          name: "Person 2",
          children: [
            {
              name: "Person 3",
              children: [
                {
                  name: "Person 4",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  console.dir(familyTree, { depth: null });
  console.table({familyTree});

  const importantTask = () => {
    console.count("Count");
  }

  importantTask()
  importantTask()
  importantTask()
  importantTask()
  console.countReset("Count");
  importantTask()
  importantTask()
  
  
  


