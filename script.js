document.querySelectorAll('form').forEach((form)=>{form.addEventListener('submit',(e)=>{e.preventDefault();const s=form.querySelector('.success');if(s)s.style.display='block';form.reset();});});
