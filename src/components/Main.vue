<template>
	<div class="main">
		<h1>Find a Dev Job</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<button>Let's start!</button>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main {
	text-align: left;
	margin: 0 20%;
	@media screen and (max-width: 414px) {
		margin: 0 10%;
	}
	h1 {
		color: #6072e1;
		margin-bottom: 1rem;
	}
	p {
		margin-bottom: 1rem;
	}
	button {
		height: 3rem;
		width: 10rem;
		border-radius: 3px;
		background: #6072e1;
		color: #fff;
		border: none;
		outline: none;
		font-size: 1.25rem;
		opacity: 1;
	
		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}
}

</style>