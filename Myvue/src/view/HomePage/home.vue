<template>
    <div 
        class = "main_con">
        <button
            class = "btn"
            @click.stop.prevent = "textClick">
            {{
                demo1
            }}
        </button>
    </div>
</template>
<script>
export default {
    name : 'Home',
    data(){
        return {
            demo1 : '点击我进行测试'
        }
    },
    methods : {
        textClick(){
            console.log("fsdassaddsad");
            this.$message(
                {
                    showClose: true,
                    duration : 10000,
                    type: 'success',
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                }
            );
        }
    }
}
</script>
<style scoped>
.main_con{
    width : 100vw;
    height : 100vh;
    font : bold 20px 'Sim Sun';
    color : #48A8DA;
    user-select: none;
    display: flex;
    flex-flow : row nowrap;
    justify-content: flex-start;
    align-items: center;
}
button {
    outline: none;
    background: none;
    width : 10%;
    height: 10%;
    border-radius : 4px;
    border : 1px solid lightcoral;
    box-shadow   : 2px  2px 0 2px rgba(0,0,0,.2);
    cursor: pointer;
}
</style>

