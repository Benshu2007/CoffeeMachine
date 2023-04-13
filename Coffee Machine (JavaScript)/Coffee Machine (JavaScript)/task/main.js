// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')


function printState(available)
{
    console.log(`The coffee machine has:\n${available[0]} ml of water\n${available[1]} ml of milk\n${available[2]} g of coffee beans\n${available[3]} disposable cups\n$${available[4]} of money`)
}


function buyActions(needs)
{
    for (let i = 0; i < needs.length; i++)
    {
        if (i === 4)
        {
            available[i] += needs[i]
        } else {
            available[i] -= needs[i]
        }
    }
}


function checkAvailable(needs)
{
    if (checkResources(needs)[0])
    {
        console.log("I have enough resources, making you a coffee!")
        buyActions(needs)
    } else
    {
        let products = numToProducts(checkResources([1]))
        console.log(`Sorry, not enough `)
        for (let i = 0; i < products.length; ++i)
        {
            console.log(`${products[i]} `)
        }
        console.log("!")
    }
}


function checkResources(needs)
{
    let check = 0;
    let flags = [0, 0, 0, 0, 0]
    let resources = []
    for (let i = 0; i < needs.length; ++i)
    {
        if (needs[i] < available[i])
        {
            check++
            flags[i] = 1
        }
    }

    for (let i = 0; i < flags.length; ++i)
    {
        if (flags[i] === 1)
        {
            resources[i] = i + 1
        }
    }

    return [check === 5, resources];
}


function numToProducts (nums)
{
    let products = []
    for (let i = 0; i < nums.length; ++i)
    {
        switch (nums[i])
        {
            case 1:
                products[i] = "water"
                break

            case 2:
                products[i] = "milk"
                break

            case 3:
                products[i] = "coffee beans"
                break

            case 4:
                products[i] = "disposable cups"
                break
        }
    }

    return products
}


function buy()
{
    console.log("What do you want to buy? (1 - espresso, 2 - latte, 3 - cappuccino, 4 - coffee dark): ")
    let type = parseInt(input())

    switch (type)
    {
        case 1:
            needs = [250, 0, 16, 1, 4]
            checkAvailable(needs)
            break

        case 2:
            needs = [350, 75, 20, 1, 7]
            checkAvailable(needs)
            break

        case 3:
            needs = [200, 100, 12, 1, 6]
            checkAvailable(needs)
            break

        case 4:
            needs = [250, 0, 15, 1, 5]
            checkAvailable(needs)
            break
    }
}


function fill()
{
    console.log("ml of water: ")
    let fillWater = parseInt(input())
    console.log("ml of milk: ")
    let fillMilk = parseInt(input())
    console.log("gram of coffee beans: ")
    let fillBeans = parseInt(input())
    console.log("disposable cups: ")
    let disCups = parseInt(input())
    available[0] += fillWater
    available[1] += fillMilk
    available[2] += fillBeans
    available[3] += disCups
}


function take()
{
    let money = available[4]
    console.log(`I gave you $${money}`)
    available[4] = 0
}

let needs = []
let available = [400, 540, 120, 9, 550]
let run = true

while (run) {
//Gets an info from the user
    console.log("Write action (buy, fill, take, remaining, exit): ")
    const option = input()

    switch (option) {
        case "buy":
            buy()
            break

        case "fill":
            fill()
            break

        case "take":
            take()
            break

        case "remaining":
            printState(available)
            break

        case "exit":
            run = false
            break
    }
}