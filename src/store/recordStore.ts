import recordModel from "@/models/recordModel";

export default {
    recordList:recordModel.fetch(),
    createRecord:(record:RecordItem)=>{
        recordModel.create(record)
    }
}