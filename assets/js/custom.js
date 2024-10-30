

const installGenplan = () =>{
    const buildingItem = document.querySelectorAll('.building-item')
    const informationAddress = document.querySelector('#information-address')
    const informationFloors = document.querySelector('#information-floors')
    const informationApartmentsAll = document.querySelector('#information-apartments-all')
    const informationApartmentsFree = document.querySelector('#information-apartments-free')
    const informationApartmentsAction = document.querySelector('#information-apartments-action')
    const informationApartmentsReservation = document.querySelector('#information-apartments-reservation')

    buildingItem.forEach(building =>{
        building.addEventListener('mouseover', function(){
            const buildingAddress = building.getAttribute('data-address')
            const buildingFloors = building.getAttribute('data-floors')
            const buildingApartmentsAll = building.getAttribute('data-apartments-all')
            const buildingApartmentsFree = building.getAttribute('data-apartments-free')
            const buildingApartmentsAction = building.getAttribute('data-apartments-action')
            const buildingApartmentsReservation = building.getAttribute('data-apartments-reservation')

            informationAddress.innerHTML = buildingAddress;
            informationFloors.innerHTML = buildingFloors;
            informationApartmentsAll.innerHTML = buildingApartmentsAll;
            informationApartmentsFree.innerHTML = buildingApartmentsFree;
            informationApartmentsAction.innerHTML = buildingApartmentsAction;
            informationApartmentsReservation.innerHTML = buildingApartmentsReservation;
            
        });
        const buildingFree = building.getAttribute('data-apartments-free')
        if (Number(buildingFree) === 0) {
            building.classList.add('building-sold')
        }
        building.addEventListener('click', function(event){
            if (building.classList.contains('building-sold')){
                event.preventDefault();
            }
        })
    })
}

const installBuildingItem = () =>{
    const floorItem = document.querySelectorAll('.floor-item')    
    const informationAddress = document.querySelector('#floor-information-address')
    const informationFloors = document.querySelector('#floor-information-floors')
    const informationApartmentsAll = document.querySelector('#floor-information-apartments-all')
    const informationApartmentsFree = document.querySelector('#floor-information-apartments-free')
    const informationApartmentsAction = document.querySelector('#floor-information-apartments-action')
    const informationApartmentsReservation = document.querySelector('#floor-information-apartments-reservation')
    floorItem.forEach(floor =>{
        floor.addEventListener('mouseover', function(){
            const floorAddress = floor.getAttribute('data-address')
            const floorFloors = floor.getAttribute('data-floors')
            const floorApartmentsAll = floor.getAttribute('data-apartments-all')
            const floorApartmentsFree = floor.getAttribute('data-apartments-free')
            const floorApartmentsAction = floor.getAttribute('data-apartments-action')
            const floorApartmentsReservation = floor.getAttribute('data-apartments-reservation')
            informationAddress.innerHTML = floorAddress;
            informationFloors.innerHTML = floorFloors;
            informationApartmentsAll.innerHTML = floorApartmentsAll;
            informationApartmentsFree.innerHTML = floorApartmentsFree;
            informationApartmentsAction.innerHTML = floorApartmentsAction;
            informationApartmentsReservation.innerHTML = floorApartmentsReservation;            
        });
        const floorFree = floor.getAttribute('data-apartments-free')
        if (Number(floorFree) === 0) {
            floor.classList.add('floor-sold')
        }
        floor.addEventListener('click', function(event){
            if (floor.classList.contains('floor-sold')){
                event.preventDefault();
            }
        })
    })
   
        
  
}
document.querySelector('.genplan') ? installGenplan() : null;
document.querySelector('.page-building-item') ? installBuildingItem() : null;