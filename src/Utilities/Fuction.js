export const clickHere = (id) => document.getElementById("check-ans-btn").addEventListener('click',()=>{
    const correctAns = document.getElementById('correctAns')
    correctAns.classList.add('style-click')
})