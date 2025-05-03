<template>
    <div>
        <h1> I am a child component.</h1>
        <hr />
        <p>Prop is:{{name}} </p>
        <button @click="$emit('EventName','Hi')">Emit event</button>
        <p>Injected from parent:{{providedInfo}}   </p>

    </div>
</template>

<script>

export default{
    props:['propName'],
    data(){
        return {
            name:this.propName
        }
    },
    inject:['providedInfo']
}

</script> 