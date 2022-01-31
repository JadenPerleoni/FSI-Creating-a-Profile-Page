let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')

let dogImage = document.createElement('img')
dogImage.setAttribute('src', "./assets/rizzo.jpg")
dogImage.setAttribute('class', 'dog-image')

dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')


let dogDesc = document.createElement('h3')
dogDesc.append("Description: ")


let dogPar = document.createElement('p')
dogPar.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")

let dogTime = document.createElement('h3')
dogTime.append("Feeding Times: ")

let dogList = document.createElement('ul')
dogList.append("9:00 am")


dogDetails.append(dogDesc)
dogDetails.append(dogPar)
dogDetails.append(dogTime)
dogDetails.append(dogList)

dogContent.append(dogDetails)


content.append(dogContent)

