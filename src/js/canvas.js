import platform from '../mario_platform.png'
import background from '../background.png'
import hills from '../hills.png'
//console.log(platform)
const canvas = document.querySelector('canvas')

const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576 //16:9 aspect ratio

const gravity = 0.5
//to create any sort of player or art on canvas create a class is a good start
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.height = 30
        this.width = 30
    }
    //method to define how player looks:
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }

    //need to create an update function - method to change player property over time
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        //establishing a floor and factoring gravity into fall
        if (this.position.y + this.height + this.velocity.y <= canvas.height){ //if player is higher than bottom of screen, keep building velocity, else velocity = 0
            this.velocity.y += gravity
        } //else this.velocity.y = 0
    }
}


//build platforms for player to jump onto and avoid pit of death
class Platform {
   constructor({ x, y, image }){
       this.position = {
           x:x,
           y:y
       }

       this.image = image
       this.width = image.width
       this.height = image.height
       
   }
   
   draw() {
      //  c.fillStyle = 'blue'
      //  c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y)
   }
}

//background stuff
class genericObject {
  constructor({ x, y, image }){
      this.position = {
          x:x,
          y:y
      }

      this.image = image
      this.width = image.width
      this.height = image.height
      
  }
  
  draw() {
     //  c.fillStyle = 'blue'
     //  c.fillRect(this.position.x, this.position.y, this.width, this.height)
     c.drawImage(this.image, this.position.x, this.position.y)
  }
}


//create a function to take argument of image source so we don't have to keep calling on specific srcs around. DRY

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

let platformImage = createImage(platform)


let genericObjects = [
  new genericObject({
    x: -1, //where we want it to start
    y: -1,
    image: createImage(background)
  }),
  new genericObject({
    x: -1,
    y: -1,
    image: createImage(hills)
  })
]

let player = new Player()
//const platform = new Platform()
let platforms = [
  new Platform({
    x: -1, 
    y: 470, 
    image:platformImage}), 
  new Platform({
    x: platformImage.width+200, 
    y: 200, 
    image:platformImage}),
  new Platform({
    x: platformImage.width*2 + 400, 
    y: 470, 
    image:platformImage})
]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
//player.update()
let scrollOffset = 0

//when player dies we are going to call function restart to reset player back to start position
function restart(){

  platformImage = createImage(platform)

  genericObjects = [
    new genericObject({
      x: -1, //where we want it to start
      y: -1,
      image: createImage(background)
    }),
    new genericObject({
      x: -1,
      y: -1,
      image: createImage(hills)
    })
  ]

  player = new Player()
  //const platform = new Platform()
  platforms = [
    new Platform({
      x: -1, 
      y: 470, 
      image:platformImage}), 
    new Platform({
      x: platformImage.width+200, 
      y: 200, 
      image:platformImage}),
    new Platform({
      x: platformImage.width*2 + 400, 
      y: 470, 
      image:platformImage})
]

  //player.update()
  scrollOffset = 0
}

//need animation funciton to loop player update
function animate() {
    requestAnimationFrame(animate)

    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height) //white background for playable area
    //platform.draw()
    //draw background first:
    genericObjects.forEach(genericObject => {
      genericObject.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })

    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
        //set player velocity to zero and start moving platform backwards to create illusion of movement
        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5
                scrollOffset +=5
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x -=3
            })
        } else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5
                scrollOffset -= 5
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x +=3
            })
        }
    }

    //if player is on top of platform, don't fall anymore -- colloision detection
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
            player.velocity.y = 0
        }
    })

    //win condition
    if (scrollOffset > 9400){
        console.log('winner')
    }

    //lose condition
    if (player.position.y > canvas.height){
      console.log('you lose')
      restart()
    }
    player.update()
}

animate()

addEventListener('keydown', ({ keyCode })=> { //object destructuring of keyboard event to retrieve keyCode
    console.log(keyCode)
    switch(keyCode){
            case 65:
                console.log('left')
                keys.left.pressed = true
                break
            case 83:
                console.log('down')
                break
            case 68:
                console.log('right')
                //player.velocity.x = 5
                keys.right.pressed = true
                break
            case 87:
                console.log('up')
                player.velocity.y -= 20
                break
    }
})

addEventListener('keyup', ({ keyCode })=> { //object destructuring of keyboard event to retrieve keyCode
    console.log(keyCode)
    switch(keyCode){
            case 65:
                console.log('left')
                keys.left.pressed = false
                break
            case 83:
                console.log('down')
                break
            case 68:
                console.log('right')
                //player.velocity.x = 0
                keys.right.pressed = false
                break
            case 87:
                console.log('up')
                player.velocity.y -= 0
                break
    }
})