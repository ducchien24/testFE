const items = [
  {
    name: "Planing & Design",
    title: [
      {
        nameTitle: "Budget planning",
        description:
          "The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
      },
      {
        nameTitle: "Bridal Salon Selection",
        description:
          "2.The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
      },
      {
        nameTitle: "Bridesmaid Dres Selection",
        description:
          "3.The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
      },
      {
        nameTitle: "Wedding Cake",
        description:
          "4.The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
      },
    ],
  },
  {
    name: "Floral & Decor",
    title: [
      {
        nameTitle: "Floral",
        description:
          "From maintaining your budget and managing RSVPs to curating the ideal creative team and negotiating vendor contracts, we’re here to labor over logistics so you don’t have to. You’ll have a clear understanding of what’s coming next throughout the process—without ever being inundated with unnecessary information, options that aren’t a right fit, or tedious to-dos.",
      },
      {
        nameTitle: "Decor selection",
        description:
          "2.From maintaining your budget and managing RSVPs to curating the ideal creative team and negotiating vendor contracts, we’re here to labor over logistics so you don’t have to. You’ll have a clear understanding of what’s coming next throughout the process—without ever being inundated with unnecessary information, options that aren’t a right fit, or tedious to-dos.",
      },
      {
        nameTitle: "Hair & makeup",
        description:
          "3.From maintaining your budget and managing RSVPs to curating the ideal creative team and negotiating vendor contracts, we’re here to labor over logistics so you don’t have to. You’ll have a clear understanding of what’s coming next throughout the process—without ever being inundated with unnecessary information, options that aren’t a right fit, or tedious to-dos.",
      },
      {
        nameTitle: "Lighting & Sound",
        description:
          "4.From maintaining your budget and managing RSVPs to curating the ideal creative team and negotiating vendor contracts, we’re here to labor over logistics so you don’t have to. You’ll have a clear understanding of what’s coming next throughout the process—without ever being inundated with unnecessary information, options that aren’t a right fit, or tedious to-dos.",
      },
    ],
  },
  {
    name: "Paperie & Branding",
    title: [
      {
        nameTitle: "Invitations",
        description:
          "We’ll collaborate to develop an aesthetic that speaks to your soul and stems from your story. From creating design boards and sourcing artisanal items—to keeping vendors on the same page and perfecting every last touchpoint across your entire affair— we’re here to deliver a cohesive collection of meaningful moments that, together, create the wedding of your wildest dreams.",
      },
      {
        nameTitle: "Venue selection & management",
        description:
          "2.We’ll collaborate to develop an aesthetic that speaks to your soul and stems from your story. From creating design boards and sourcing artisanal items—to keeping vendors on the same page and perfecting every last touchpoint across your entire affair— we’re here to deliver a cohesive collection of meaningful moments that, together, create the wedding of your wildest dreams.",
      },
      {
        nameTitle: "Stationery",
        description:
          "3.We’ll collaborate to develop an aesthetic that speaks to your soul and stems from your story. From creating design boards and sourcing artisanal items—to keeping vendors on the same page and perfecting every last touchpoint across your entire affair— we’re here to deliver a cohesive collection of meaningful moments that, together, create the wedding of your wildest dreams.",
      },
    ],
  },
];

const blockContent = document.querySelector(".collapsible-content__wrap-content");

items.forEach((item, index) => {
  // Create content, title, description element

  const divFragment = document.createElement("div");
  divFragment.classList.add(`box${index}`, "box");

  const nameContent = document.createElement("h4");
  nameContent.textContent = item.name;
  nameContent.classList.add(`name_content_${index}`, "name_content");

  divFragment.appendChild(nameContent);
  //   blockContent.appendChild(nameContent);

  const titleBlock = document.createElement("div");
  titleBlock.classList.add(`title_block_${index}`, "title_block");
  const descriptionBlock = document.createElement("div");
  descriptionBlock.classList.add(`description${index}`, "description_block");

  item.title.forEach((titleItem, index) => {
    const title = document.createElement("p");
    title.textContent = titleItem.nameTitle;
    title.classList.add(`title_${index}`, "title");
    title.style.cursor = "pointer";

    const description = document.createElement("p");
    description.textContent = titleItem.description;
    description.classList.add(`description_${index}`, "description");
    // description.style.display = "none";
    //show description when client click title and reset css
    title.addEventListener("click", function () {
      const allTitle = divFragment.querySelectorAll(`.title`);
      const allDescriptions = divFragment.querySelectorAll(`.description`);

      allDescriptions.forEach((desc) => (desc.style.display = "none"));
      allTitle.forEach((desc) => (desc.style.opacity = "0.4"));

      description.style.display = "block";
      title.style.cssText = `transition: opacity 0.3s ease ;opacity:1
`;
    });
    //add element
    titleBlock.appendChild(title);
    descriptionBlock.appendChild(description);
    // divFragment.appendChild(description);
    divFragment.appendChild(titleBlock);
    divFragment.appendChild(descriptionBlock);
  });
 
  blockContent.appendChild(divFragment);
});

