// console.log(AIRTABLE_KEY);
console.log(process.env.AIRTABLE_KEY);

const fetchOrganizations = () => {
    return fetch('https://api.airtable.com/v0/appNBdtRINjSfT9Yw/organizations?view=Grid%20view', {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_KEY}`
        }
    })
    .then((response) => response.json())
    .then((resolvedJSON) => {
        console.log(resolvedJSON);
        return resolvedJSON.records.map((record) => {
            return record.fields
        });
    })
}

export default fetchOrganizations;