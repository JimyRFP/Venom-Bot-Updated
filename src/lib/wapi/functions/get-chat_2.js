export async function getChatNew(chatid){
    try{
        const idUser = await window.Store.WapQuery.queryPhoneExists(chatid);
        if(!idUser || !idUser.wid){
            const chat=await window.Store.Chat.find(chatid);  
            return chat;
        }else{
            const chat=await window.Store.Chat.find(idUser.wid); 
            return chat;
        }
        
    }catch(e){
        throw e;
    }
}