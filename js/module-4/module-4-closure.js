// замыкания
// способность функции знать знаечние той переменной, которую она изменяет

// document.getElementById('dec')
// document.getElementById('inc')
// document.getElementById('count')
const productCounter = createCounter()
document.getElementById('count').textContent = productCounter.current

productCounter.increment(5)

function createCounter() {
    let current = 10

    function increment(value)
    {
        return (current += value)
    }

      function decrement(value)
      {if (current <=0) return
                  return (current -= value)
    }
return {increment, decrement, current}
}

// export default createCounter
