export default function createReportObject(employeesList) {
    return {
        allEmployees: {...employeesList},
        getNumberofDepartements: (employees) => Object.keys(employees).length,
    };
}