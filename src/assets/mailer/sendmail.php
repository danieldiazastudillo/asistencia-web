 <?php
// Mailer PROSMART XYZ v1.0
// ================================================================================================
// Envía correo electrónico desde formulario web, recibe los datos desde una cadena
// JSON (application/json). Dicho objeto puede ser complejo o con datos simples.
//
// El envío de correo se realiza utilizando PHPMailer (https://github.com/PHPMailer/PHPMailer)
// Es necesario que las siguiente clases se encuentren en el mismo directorio que el
// AutoLoader requerido más abajo:
//      - class.phpmailer.php (como mínimo)
//      - class.smtp.php
//      - class.pop3.php
//      -
require 'PHPMailerAutoload.php'; //IMPORTANTISIMO, carga las clases necesarias




// -------------------------------------------------------------------------------
// DECODIFICA POST DESDE ANGULAR/JSON
// -------------------------------------------------------------------------------

//Obtiene y decodifica datos desde JSON (application/json)
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); //objeto principal, contiene todo el objeto js vm.formData

// -------------------------------------------------------------------------------
// Interface
 // export interface IEmail {
  //   name?: string;
  //   phone?: string;
  //   email?: string;
  //   assistance?: string;
  //   message?: string;
  // }
// -------------------------------------------------------------------------------

//Variables Mail (desde objeto JS)
$nombre = $request->name; //deben corresponder al mismo nombre del objeto JS. El objeto JS fue codificado en un objeto PHP
$telefono = $request->phone;
$email = $request->email;
$asistencia = $request->assistance;
$mensaje = $request->message;


// -------------------------------------------------------------------------------
// RECEPTORES
// -------------------------------------------------------------------------------
$receptorPrincipal = 'negrodiazas@gmail.com'; //destinatario del correo desde formulario
$concopia = 'matiasbravomillan@gmail.com';
$concopiaOculta = 'matias@the-hunch.com'; //con copia

// -------------------------------------------------------------------------------
// DATOS CORREO
// -------------------------------------------------------------------------------
$remitenteCorreo = 'no-responder@asistenciaahora.cl';
$remitenteNombre = 'Asistencia Ahora Web';
$asuntoCorreo = $nombre . ' solicita Asistencia Ahora de tipo ' . $asistencia;



//Cuerpo del Mensaje, está en HTML
$body =  '<p><strong>Nombre:</strong> ' . $nombre . '</p>';
$body .= '<p><strong>Email:</strong> ' .$email. '</p>';
$body .= '<p><strong>Telefono:</strong> ' .$telefono. '</p>';
$body .= '<p><strong>Asistencia:</strong> ' .$asistencia. '</p>';
$body .= '<p><strong>Mensaje:</strong> ' .$mensaje. '</p>';



// -------------------------------------------------------------------------------
// CONFIGURACION PHPMAILER
// https://github.com/PHPMailer/PHPMailer
// -------------------------------------------------------------------------------

$mail = new PHPMailer; // instancia de PHPMailer()
$mail->isHTML(true); // indica que el mensaje de correo está en HTML, por defecto esta configuración es FALSE

$mail->setFrom($remitenteCorreo, $remitenteNombre); // DESDE. Mail que aparece como remitente del correo. ('direccion@correo.cl', 'Nombre del Remitente')
$mail->addAddress($receptorPrincipal); // receptor del correo electrónico enviado desde el formulario
$mail->addCC($concopia); // con copia para...
$mail->addBCC($concopiaOculta);
$mail->addReplyTo($email); // permite que al momento de apretar RESPONDER en el cliente de correo electrónico personal, aparezca en PARA el correo ingresado por el cliente/usuario


$mail->Subject = $asuntoCorreo; // Asunto
$mail->Body    = $body; // cuerpo del mensaje. Corresponde al string generado anteriormente. NO MODIFICAR!

if(!$mail->send()) { // en caso de que el mensaje NO PUEDA SER ENVIADO
    $response = array('success' => false, 'message' => 'Mensaje no pudo ser enviado. Mailer Error: ' . $mail->ErrorInfo);
    echo json_encode($response);
    exit;
} else { // en caso de que el mensaje haya sido ENVIADO EXITOSAMENTE
    $response = array('success' => true, 'message' => 'Mensaje enviado satisfactoriamente. Muchas gracias.');
    echo json_encode($response);
}

?>
