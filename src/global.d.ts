type RecordItem ={
    tags:Tag[],
    notes:string,
    type:string,
    amount:number,
    createdTime?:string
}
type RootState={
    recordList:RecordItem[],
    tagList:Tag[],
    currentTag?:Tag
}
type Tag={
    id:string,
    name:string
}
type TagModel={
    data:Tag[],
    fetch:()=>Tag[],
    create:(name:string)=>'success'|'duplicated',
    update:(id:string,name:string)=>'success'|'notfound'|'duplicated',
    remove:(id:string)=>boolean,
    save:()=>void
}