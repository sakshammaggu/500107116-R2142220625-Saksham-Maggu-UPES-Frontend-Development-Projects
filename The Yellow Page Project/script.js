const scrollToDivision=(id)=>{
    let section=document.getElementById(id);
    
    if (section)
    {
        section.scrollIntoView({behavior:'smooth'});
    }
}