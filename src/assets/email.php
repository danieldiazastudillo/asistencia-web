<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);


  // export interface IEmail {
  //   name?: string;
  //   phone?: string;
  //   email?: string;
  //   assistance?: string;
  //   message?: string;
  // }


  // own model...
  $name = $request->name;
  $phone = $request->phone;
  $email = $request->email;
  $assistance = $request->assistance;
  $message = $request->message;


	$from_email = $email;
	$from_name = $name;
	$to_email = 'mat.bravo@gmail.com';

	$contact = "<p><strong>Nombre:</strong> $from_name</p>
              <p><strong>Email:</strong> $from_email</p>
              <p><strong>Telefono:</strong> $phone</p>
              <p><strong>Asistencia Solicitada:</strong> $assistance</p>";
	$content = "<p>$message</p>";

	$website = 'Asistencia Ahora Web';
	$email_subject = "$website | Mensaje de $from_name solicita asistencia $assistance";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";

  mail($to_email,$email_subject,$email_body,$headers);


	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
