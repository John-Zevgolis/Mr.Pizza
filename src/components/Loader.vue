<template>
  <div class="loader fixed-top w-100 h-100 justify-content-center align-items-center">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  background: #fff;
  display: flex;

  .spinner {
    width: 60px;
    height: 60px;
    margin: 100px auto;
    background-color: #d8252f;

    border-radius: 100%;  
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
  }
}


@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>