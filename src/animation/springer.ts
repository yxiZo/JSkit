// https://github.com/tannerlinsley/springer/blob/master/src/index.js
const msPerFrame = 16
const sampleDuration = 10000
const sampleMsPerFrame = msPerFrame / (sampleDuration)

let reusedTuple = [0, 0]

export default function Springer (tension = 0.5, wobble = 0.5) {
  const stiffness = Math.min(Math.max(350 * tension, 20), 350)
  const damping = Math.min(Math.max(40 - (40 * wobble), 1), 40)
  const steps: number[] = []

  let progress = 0
  let velocity = 0

  while (progress !== sampleDuration || velocity !== 0) {
    [progress, velocity] = stepper(
      progress,
      sampleDuration,
      velocity,
      stiffness,
      damping
    )
    steps.push(progress / sampleDuration)
  }

  return (i: number) => {
    return steps[Math.ceil(i * (steps.length - 1))]
  }
}

// Inspired by https://github.com/chenglou/react-motion/blob/master/src/stepper.js
function stepper (
  value: number,
  destination: number,
  velocity: number,
  stiffness: number,
  damping: number
) {
  const spring = -stiffness * (value - destination)
  const damper = -damping * velocity
  const a = spring + damper
  const newVelocity = velocity + a * sampleMsPerFrame
  const newValue = value + newVelocity * sampleMsPerFrame

  if (Math.abs(newVelocity) < 1 && Math.abs(newValue - destination) < 1) {
    reusedTuple[0] = destination
    reusedTuple[1] = 0
    return reusedTuple
  }

  reusedTuple[0] = newValue
  reusedTuple[1] = newVelocity

  return reusedTuple
}


// const spring = springer(0.5, 0.8)

// console.log(spring(0))   // 0
// console.log(spring(0.2)) // 0.80516
// console.log(spring(0.4)) // 1.01897
// console.log(spring(0.6)) // 1.00010
// console.log(spring(0.8)) // 0.99974
// console.log(spring(1))   // 1