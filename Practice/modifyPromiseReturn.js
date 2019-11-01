<script>
const t = new Promise((res, rej) => res(42))

;(async() => {
	const tt = (await t).toString() // applies toString to the resolve of t
    
    console.log({tt})
})()


</script>
