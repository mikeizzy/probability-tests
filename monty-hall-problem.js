const rounds = 1000

let initialChoiceCorrectCount = 0
let alternativeChoiceCorrectCount = 0

for (i = rounds; i > 0; i--) {

  const doorChoicesLeft = [0, 1, 2]

  const doorWithCar = Math.round(
    Math.random() * 2
  )
  const initialChosenDoor = Math.round(
    Math.random() * 2
  )

  if (doorWithCar !== initialChosenDoor) {

    doorChoicesLeft.splice(
      doorChoicesLeft.find(v => {
        return v !== doorWithCar && v !== initialChosenDoor
      }),
      1,
    )

  } else {

    const indicesThatCanBeEliminated = doorChoicesLeft.filter(v => v !== initialChosenDoor)
    const indexToEliminate = indicesThatCanBeEliminated.splice(
      Math.round(
        Math.random() * 1
      ),
      1,
    )

    doorChoicesLeft.splice(
      indexToEliminate,
      1,
    )
  }

  const alternativeDoor = doorChoicesLeft.filter(v => v !== initialChosenDoor)[0]

  if (initialChosenDoor === doorWithCar) {
    initialChoiceCorrectCount = initialChoiceCorrectCount + 1
  }
  else if (alternativeDoor === doorWithCar) {
    alternativeChoiceCorrectCount = alternativeChoiceCorrectCount + 1
  }
}

console.log(
  `Initial choice correct ${initialChoiceCorrectCount}/${rounds} times\nAlternative choice correct ${alternativeChoiceCorrectCount}/${rounds} times`,
)