<template>
	<div class="loader position-fixed w-100 h-100 justify-content-center align-items-center">
		<div class="spinner"></div>
	</div>
</template>

<style lang="scss" scoped>
.loader {
	display: flex;
	background: #fff;
	top: 0;
	left: 0;
	z-index: 2000;

	.spinner {
		width: 60px;
		height: 60px;
		margin: 100px auto;
		background-color: #d8252f;
		border-radius: 100%;  
		animation: sk-scaleout 1.0s infinite ease-in-out;
	}

	@keyframes sk-scaleout {
		0% { 
			transform: scale(0);
		} 
		100% {
			transform: scale(1.0);
			opacity: 0;
		}
	}
}
</style>