import{a1 as t}from"./index-08731fde.js";function n(e){return t({url:"/manage/comments/detailComment/"+e,method:"get",headers:{isToken:!1}})}function a(e){return t({url:"/manage/comments/addComment",method:"post",data:e,headers:{repeatSubmit:!1}})}function o(e){return t({url:"/manage/comments/addCommentLevel",method:"post",data:e,headers:{repeatSubmit:!1}})}function r(e){return t({url:"/manage/comments/delReply",method:"delete",data:e,headers:{repeatSubmit:!1}})}function d(e){return t({url:"/manage/comments/delComment",method:"delete",data:e,headers:{repeatSubmit:!1}})}function l(){return t({url:"/manage/comments/commentArticle",method:"get"})}function s(){return t({url:"/manage/comments/commentArticleLevel",method:"get"})}function u(){return t({url:"/manage/comments/myComment",method:"get"})}function c(){return t({url:"/manage/comments/myCommentLevel",method:"get"})}export{r as a,a as b,o as c,d,l as e,s as f,n as g,c as h,u as m};
