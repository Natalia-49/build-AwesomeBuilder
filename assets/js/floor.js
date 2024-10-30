const floorArr =[{
    id: 0,
    building:"25",
    floor: "4",    
    apartmentNumber: "1",
    rooms: "3",
    square: "82,3 м2",
    price:"720$",
    priceTotal:"59256$",
    status:"action",
},
{
    id: 1,
    building:"25",
    floor: "4",    
    apartmentNumber: "2",
    rooms: "2",
    square: "60,7 м2",
    price:"700$",
    priceTotal:"43704$",
    status:"sold", 
},
{
    id: 2,
    building:"25",
    floor: "4",    
    apartmentNumber: "3",
    rooms: "2",
    square: "60,7 м2",
    price:"700$",
    priceTotal:"43704$",
    status:"free", 
},
{
    id: 3,
    building:"25",
    floor: "4",    
    apartmentNumber: "4",
    rooms: "3",
    square: "82,0 м2",
    price:"720$",
    priceTotal:"59040$",
    status:"action",
},
{
    id: 4,
    building:"25",
    floor: "4",    
    apartmentNumber: "5",
    rooms: "3",
    square: "79,7 м2",
    price:"720$",
    priceTotal:"57384$",
    status:"reserved",
},
{
    id: 5,
    building:"25",
    floor: "4",    
    apartmentNumber: "6",
    rooms: "1",
    square: "39,2 м2",
    price:"730$",
    priceTotal:"28616$",
    status:"free",
},
{
    id: 6,
    building:"25",
    floor: "4",    
    apartmentNumber: "7",
    rooms: "1",
    square: "42,0 м2",
    price:"730$",
    priceTotal:"30660$",
    status:"reserved",
},
{
    id: 7,
    building:"25",
    floor: "4",    
    apartmentNumber: "8",
    rooms: "1",
    square: "39,2 м2",
    price:"730$",
    priceTotal:"28616$",
    status:"sold",
},
{
    id: 8,
    building:"25",
    floor: "4",    
    apartmentNumber: "9",
    rooms: "3",
    square: "79,3 м2",
    price:"720$",
    priceTotal:"57096$",
    status:"action",
},
]

const installFloor = () => {
    const floorItems = document.querySelectorAll('.floor-item')
    const floorInfo = document.querySelector('.information-list')
    const firstFloor = [floorArr[0]]

    const removeActiveClass =()=> floorItems.forEach(item => item.classList.remove('active'))

    const setInitialActiveClass =()=>{        
        const floorItem = document.querySelector('.floor-item')
        floorItem.classList.add('active')
    }

    const renderInformation =(array)=>{
        const floorInformation = array.map(item =>{
            return (`
            <li class="information-item">
			    <h4>№ дома:</h4>
			    <div>${item.building}</div>			
		    </li>
            <li class="information-item">
			    <h4>Поверх:</h4>
			    <div>${item.floor}</div>
		    </li>
		    <li class="information-item">
			    <h4>№ квартири:</h4>
			    <div>${item.apartmentNumber}</div>
		    </li>
		    <li class="information-item">
			    <h4>Кількість кімнат:</h4>
			    <div>${item.rooms}</div>
		    </li>
		    <li class="information-item">
			    <h4>Площа квартири:</h4>
			    <div>${item.square}</div>
		    </li>
		    <li class="information-item">
			    <h4>Ціна за м<sup>2</sup>:</h4>
			    <div>${item.price}</div>
		    </li>
		    <li class="information-item">
			    <h4>Ціна за квартиру:</h4>
			    <div>${item.priceTotal}</div>
		    </li>
		    <li class="information-item">
			    <h4>Статус квартири:</h4>
			    <div>${item.status}</div>
		    </li>
            `)        
        })
        floorInfo.innerHTML = floorInformation
    }
    renderInformation(firstFloor)

    floorItems.forEach(floorItem => {
        floorItem.addEventListener('mouseover', function(){
            removeActiveClass()
            floorItem.classList.add('active')

            const thisApartmentNumber = floorItem.getAttribute('data-number')
            const apartmentNumber = floorArr.filter(item => item.apartmentNumber === thisApartmentNumber)
            renderInformation(apartmentNumber)
        });
        
        const setFloorStatus =()=> floorArr.find(item => {
            const thisApartmentNumber = floorItem.getAttribute('data-number')
            if (item.apartmentNumber === thisApartmentNumber){
                floorItem.classList.add(item.status)
            }
        })

        setFloorStatus()
        if (floorItem.classList.contains('action')) {
            floorItem.querySelector('.floor-status-text').innerHTML = 'Акція'
        }
        else if (floorItem.classList.contains('reserved')) {
            floorItem.querySelector('.floor-status-text').innerHTML = 'Бронь'
        }
        else if (floorItem.classList.contains('sold')) {
            floorItem.querySelector('.floor-status-text').innerHTML = 'Продано'
        }
        else {
            floorItem.querySelector('.floor-status-text').innerHTML = 'Вільно'
        }
    })
    setInitialActiveClass()
}

const installApartment = () => {
    const apartmentInfo = document.querySelector('.information-list')  
    const apartmentNumber = [floorArr[0]]

    const renderInformation =(array)=>{
        const floorInformation = array.map(item =>{
            return (`
            <li class="information-item">
			    <h4>№ дома:</h4>
			    <div>${item.building}</div>			
		    </li>
            <li class="information-item">
			    <h4>Поверх:</h4>
			    <div>${item.floor}</div>
		    </li>
		    <li class="information-item">
			    <h4>№ квартири:</h4>
			    <div>${item.apartmentNumber}</div>
		    </li>
		    <li class="information-item">
			    <h4>Кількість кімнат:</h4>
			    <div>${item.rooms}</div>
		    </li>
		    <li class="information-item">
			    <h4>Площа квартири:</h4>
			    <div>${item.square}</div>
		    </li>
		    <li class="information-item">
			    <h4>Ціна за м<sup>2</sup>:</h4>
			    <div>${item.price}</div>
		    </li>
		    <li class="information-item">
			    <h4>Ціна за квартиру:</h4>
			    <div>${item.priceTotal}</div>
		    </li>
		    <li class="information-item">
			    <h4>Статус квартири:</h4>
			    <div>${item.status}</div>
		    </li>
            `)        
        })
        apartmentInfo.innerHTML = floorInformation
    }
    renderInformation(apartmentNumber) 
}

document.querySelector('.page-floor-item') ? installFloor() : null;
document.querySelector('.page-apartment') ? installApartment() : null;