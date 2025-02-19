items = [
  { 
    title: "Cusion",
    description:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
   
    },
  { 
    title: "Opholstery",
    description:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
  
    },
  {
    title: "Frame",
    description:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
 
    },
  { 
    title: "Finish",
    description:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
    },
];

const contentDiv= document.querySelector('.collapsible-content-4__content')
console.log(contentDiv)

    items.map((item,index)=>{
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(`collapsible-content-4__div--${index}`);
        
        const title = document.createElement('span');
        title.textContent = item.title;
      

        const button = document.createElement('span');
        button.textContent =  '+';
        button.style.cursor= 'pointer'
        
        const description = document.createElement('p');
        description.classList.add('collapsible-content-4__description',`description_item_${index}`);
        description.textContent = item.description;
        description.style.display = 'none';
       
        
        button.addEventListener('click', () => {
            if (description.style.display === 'none') {
                description.style.display = 'block';
                button.textContent = '-';
                itemDiv.style.borderBottom='none'
                
            } else {
                description.style.display = 'none';
                button.textContent = '+';
                itemDiv.style.borderBottom='1px solid #0000001c'
            }
        });
        
        itemDiv.appendChild(title);
        itemDiv.appendChild(button);
       
        contentDiv.appendChild(itemDiv);
        contentDiv.appendChild(description);
    })
