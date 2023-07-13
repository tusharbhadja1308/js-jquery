<?php
// Retrieve the form data
// $fname = $_POST['fname'];
// $lname = $_POST['lname'];
// $gender = $_POST['gender'];
// $contact = $_POST['contact'];
// $second_contact = $_POST['second-contact'];
// $dob = $_POST['dob'];
// $email = $_POST['email'];
// $password = $_POST['password'];
// $c_password = $_POST['c-password'];
// $address = $_POST['address'];
// $state = $_POST['state'];
// $city = $_POST['city'];

// Process the data and generate the response
// You can perform validation, database operations, or any other necessary tasks here

// Generate the table data
// $tableData = "
//     <tr>
//         <td>First Name</td>
//         <td>$fname</td>
//     </tr>
//     <tr>
//         <td>Last Name</td>
//         <td>$lname</td>
//     </tr>
//     <tr>
//         <td>Gender</td>
//         <td>$gender</td>
//     </tr>
//     <tr>
//         <td>Contact</td>
//         <td>$contact</td>
//     </tr>
//     <tr>
//         <td>Secondary Contact</td>
//         <td>$second_contact</td>
//     </tr>
//     <tr>
//         <td>Date of Birth</td>
//         <td>$dob</td>
//     </tr>
//     <tr>
//         <td>Email</td>
//         <td>$email</td>
//     </tr>
//     <tr>
//         <td>Address</td>
//         <td>$address</td>
//     </tr>
//     <tr>
//         <td>State</td>
//         <td>$state</td>
//     </tr>
//     <tr>
//         <td>City</td>
//         <td>$city</td>
//     </tr>
// ";

// Send the response back
// $response = array('tableData' => $tableData);
// echo json_encode($response);
?>

<?php
// Process form data
$data = [
    "First Name" => $_POST["fname"],
    "Last Name" => $_POST["lname"],
    "Gender" => isset($_POST["gender"]) ? $_POST["gender"] : "",
    "Contact" => $_POST["contact"],
    "Secondary Contact" => $_POST["second-contact"],
    "Date of Birth" => $_POST["dob"],
    "Email" => $_POST["email"],
    "Address" => $_POST["address"],
    "State" => $_POST["state"],
    "City" => $_POST["city"],
];

// Return JSON response
// header("Content-Type: application/json");
// echo json_encode($data);


echo $data;
?>
