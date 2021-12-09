import tagModel from "@/models/tagModel";
import store from "@/store/index2";

export default {
    tagList:tagModel.fetch(),
    findTag:(id:string)=>{
        return store.tagList.filter(t=>t.id===id)[0];
    },
    createTag:(name:string)=>{
        const message=tagModel.create(name);
        if(message==='duplicated'){
            window.alert('标签名重复！！！')
        }else{
            window.alert('标签创建成功！');
        }
    },
    removeTag:(id:string)=>{
        return tagModel.remove(id);
    },
    updateTag:(id:string,name:string)=>{
        return tagModel.update(id,name);
    },
}