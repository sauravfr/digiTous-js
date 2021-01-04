let schools = [{
        name: 'YorkTown',
        country: 'Spain'
    },
    {
        name: 'Stanford',
        country: 'USA'
    },
    {
        name: 'Gymnasium Achern',
        country: 'Germany'
    }
];

let updatedSchools = [{
        name: 'New Gen',
        country: 'Spain'
    },
    {
        name: 'Stanford',
        country: 'USA'
    },
    {
        name: 'Gymnasium Achern',
        country: 'Germany'
    }
];

const editSchoolName = ((schools, oldName, name) => {
    schools.map(item => {
        if (item.name === oldName) {
            item.name = name;
            return item.name;
        } else {
            return item;
        }
    });
    console.log(schools);
});

editSchoolName(schools, 'YorkTown', "New Gen");