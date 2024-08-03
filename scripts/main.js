const returnCardsMember = () => {
    const conteinerCards = document.querySelector(".conteiner-cards");
    for (let i = 0; i < dadosMembers.length; i++) {
        conteinerCards.innerHTML += 
        `
            <div class="conteiner-card">
                <img src="${dadosMembers[i].imgMember}">
                <div class="conteiner_card-info">
                    <h3 class="name">${dadosMembers[i].nameMember}</h3>
                    <h4 class="name_area">${dadosMembers[i].areaMember}</h4>
                    <button class="bnt-info-person">
                        saiba mais
                    </button>
                </div>
            </div>
        `;
        
    }
}
returnCardsMember()