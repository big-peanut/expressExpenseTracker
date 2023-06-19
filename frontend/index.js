const myform=document.getElementById('myform')
const expenselist=document.getElementById('expenselist')

function removeFromScreen(id) {
    const listItem = document.getElementById(id);
    if (listItem && listItem.parentNode === expenselist) {
        expenselist.removeChild(listItem);
    }
}


async function delexpense(id){
    try {
        await axios.delete(`http://localhost:1000/delexpense/${id}`)
        removeFromScreen(id)
    }
    catch (err) {
        console.log(err)
    }
}

function display(expenses){
    expenselist.innerHTML = ""
    for (let i = 0; i < expenses.data.allexpense.length; i++) {
        const li = document.createElement('li')
        li.setAttribute("id", expenses.data.allexpense[i].id)
        li.textContent = `AMOUNT : ${expenses.data.allexpense[i].amount} , CATEGORY : ${expenses.data.allexpense[i].category}`
        expenselist.appendChild(li)

        const delButton = document.createElement('button')
        delButton.textContent = "Delete"
        delButton.addEventListener('click', () => delexpense(expenses.data.allexpense[i].id))
        expenselist.appendChild(delButton)
    }
}

async function getexpense(){
    try {
        const res = await axios.get("http://localhost:1000/getexpense");
        display(res)
    }
    catch (err) {
        console.log(err);
    }
}

async function addexpense(amount,category){
    let expense={
        amount,
        category
    }
    try{
        const response=axios.post("http://localhost:1000/addexpense",expense)
        getexpense()
    }
    catch(err){
        console.log(err)
    }
}

myform.addEventListener('submit',async (e)=>{
    e.preventDefault()

    let amount=document.getElementById('amount').value
    let category=document.getElementById('category').value

    await addexpense(amount,category)

    amount=""
    category=""

})

document.addEventListener('DOMContentLoaded', getexpense);