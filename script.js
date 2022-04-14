/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const img_checked="images/checked.png";
const img_unchecked="images/unchecked.png";

function selectanswer(event){ 
  const container = event.currentTarget;
  const image_check =container.querySelector('.checkbox');
  image_check.src = img_checked;

    if(!container.querySelector('unchecked'))
      {
        container.classList.remove('unchecked');
      }   

   container.classList.add('checked');
   unchec(container.dataset.choiceId, container.dataset.questionId);
   answer[container.dataset.questionId]= container.dataset.choiceId;
   console.log(answer);

  function unchec(id, num){
    const allboxes=document.querySelectorAll('.choice-grid div');
      for(const box of allboxes)
        {
         if(box.dataset.choiceId != id && box.dataset.questionId == num)
        {
          box.classList.add('unchecked');
          box.classList.remove('checked');
          const images_uncheck=box.querySelector('.checkbox');
          images_uncheck.src = img_unchecked;
        }
      }
    }
      conta();
 }

function conta(){
  let contatore=0;
   for(c in answer)
   {
     contatore++;
   }
   if (contatore==3)
    {
     console.log(contatore);
     const images=document.querySelectorAll('.choice-grid div');

     for(const im of images)
      {
        im.removeEventListener("click",selectanswer);      
      }

     getresult();

    }
   
 }
        

function getresult(){
    let result_answer=answer['one']
    const resultcontainer=document.querySelector('#results');
    resultcontainer.classList.add('results_view'); 
    const title=resultcontainer.querySelector('h1');
    const description=resultcontainer.querySelector('div');
    if(answer['two']==answer['three'] )
      {
       result_answer=answer['two'];
       console.log(answer['two']);
      }

     title.textContent=RESULTS_MAP[result_answer].title;
     description.textContent=RESULTS_MAP[result_answer].contents;
     const restartbutton=document.querySelector('button');
     restartbutton.addEventListener("click",restartAll);
     restartbutton.classList.remove('notvisible');
}

const answer={};
const images=document.querySelectorAll('.choice-grid div');
 for(const im of images)
  {
    im.addEventListener("click",selectanswer);    
  }

function restartAll(){
  for(let i in answer)
   {
    delete answer[i];
   }
    
const imag=document.querySelectorAll('.choice-grid div');

  for(const i of imag)
    {
      let verify =i.querySelector('img.checkbox');
      i.classList.remove("checked");
      i.classList.remove("unchecked");
      i.addEventListener("click",selectanswer);
      verify.src = img_unchecked;
    } 

 resultscontainer=document.querySelector('#results');
 const title=document.querySelector('#results h1');
 title.textContent=('');
 const description=document.querySelector('#results div');
 description.textContent=('');
 resultscontainer.classList.remove('results_view');
 resultscontainer.classList.add('results_unview');
 const restartbutton=document.querySelector('button');
 restartbutton.removeEventListener("click",restartAll);
 restartbutton.classList.add('notvisible');
}
 
 const button=document.querySelector('button');
 button.addEventListener("click",restartAll);

