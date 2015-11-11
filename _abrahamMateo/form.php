<?php
  session_start();
  $host = "localhost";
  $user = "brunoc_gotmusic";
  $pass = "agenciamilk";
  $banco = "brunoc_gotmusic";
  
  $conexao = mysqli_connect($host, $user, $pass) or die(mysqli_error());

  mysqli_select_db($conexao, $banco) or die(mysqli_error());
?>

<?php

  if(!isset($_SESSION["login"]) || !isset($_SESSION["password"])){
    header("Location: index.php");
    exit;
  }else{
  }
  

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="alternate" type="application/json+oembed" href="https://www.jotform.com/oembed/?format=json&amp;url=http%3A%2F%2Fwww.jotform.com%2Fform%2F53014058300642" title="oEmbed Form"><link rel="alternate" type="text/xml+oembed" href="https://www.jotform.com/oembed/?format=xml&amp;url=http%3A%2F%2Fwww.jotform.com%2Fform%2F53014058300642" title="oEmbed Form">
<meta property="og:title" content="Formulário" >
<meta property="og:url" content="http://www.jotformz.com/form/53014058300642" >
<meta property="og:description" content="Please click the link to complete this form.">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="HandheldFriendly" content="true" />
<title>Formulário</title>
<link type="text/css" rel="stylesheet" href="css/styles/form.css?v3.3.9823"/>
<link href="css/calendarview.css?v3.3.9823" rel="stylesheet" type="text/css" />
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/nova.css?3.3.9823" />
<link type="text/css" media="print" rel="stylesheet" href="https://cdn.jotfor.ms/css/printForm.css?3.3.9823" />

  <link rel="stylesheet" href="css/bootstrap.min.css">      
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/main.css">
    
  <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
  
<script src="https://cdn.jotfor.ms/js/prototype.js?v=3.3.9823" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/js/vendor/json2.js?v=3.3.9823" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/js/protoplus.js?v=3.3.9823" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/js/protoplus-ui-form.js?v=3.3.9823" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/js/jotform.js?v=3.3.9823" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/js/calendarview.js?v=3.3.9823" type="text/javascript"></script>
<script type="text/javascript">
   JotForm.init(function(){
      JotForm.alterTexts({"alphabetic":"Este campo pode conter apenas letras","alphanumeric":"Este campo só pode conter letras e números.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the Credit Card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","confirmClearForm":"Você tem certeza que quer limpar este formulário?","confirmEmail":"E-mail não confere","currency":"Este campo apenas admite valores monetários.","cyrillic":"Este campo aceita apenas caracteres cirilicos.","dateInvalid":"This date is not valid. The date format is {format}","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","email":"Digite um endereço de e-mail válido.","fillMask":"Valor do campo deve preencher máscara.","freeEmailError":"Free email accounts are not allowed","generalError":"Existem alguns erros no formulário. Corrija-os antes de continuar. ","generalPageError":"Há erros nesta página. Por favor, corrija-os antes de continuar.","gradingScoreError":"Pontuação total deve ser menor ou igual a ","incompleteFields":"Há campos obrigatórios incompletos. Por favor, preencha-os.","inputCarretErrorA":"A entrada não deve ser menor do que o valor mínimo:","inputCarretErrorB":"Valor não deve ser maior do que o máximo:","lessThan":"A sua pontuação deve ser inferior ou igual a","maxDigitsError":"O numero máximo de caracteres permitidos são","maxSelectionsError":"O número máximo de seleções permitido é","minSelectionsError":"O número mínimo exigido de seleções é","multipleFileUploads_emptyError":"{file} está vazio, por favor selecione os arquivos de novo.","multipleFileUploads_fileLimitError":"Somente são permitidos {fileLimit} envios de arquivos","multipleFileUploads_minSizeError":"{file} é muito pequeno, o tamanho mínimo do arquivo é {minSizeLimit}.","multipleFileUploads_onLeave":"Os arquivos agora estão em upload, se você sair agora o upload será cancelado.","multipleFileUploads_sizeError":"{file} é muito grande, o tamanho máximo é {sizeLimit}.","multipleFileUploads_typeError":"O arquivo {file} é inválido, pois somente as extensões {extensions} são permitidas.","numeric":"Este campo pode conter apenas números","pastDatesDisallowed":"A data não pode ser passada.","pleaseWait":"Por favor aguarde...","required":"Este campo é obrigatório.","requireEveryCell":"Toda célula é requisitada.","requireEveryRow":"Todos os campos são requeridos.","requireOne":"Pelo menos um campo é requisitado","submissionLimit":"Foi mal, mas apenas um envio de dados é permitido. Múltiplas submissões estão desativadas nesse formulário.","uploadExtensions":"Só pode fazer upload dos seguintes ficheiros:","uploadFilesize":"O tamanho do arquivo não pode ser maior que:","uploadFilesizemin":"O ficheiro não pode ser menor que:","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
	JotForm.clearFieldOnHide="disable";
	JotForm.onSubmissionError="jumpToSubmit";
   });
</script>
</head>
  <body>
    
    <div class="al-background">
    </div>
    <div class="al-container">
      <div class="container">
        <img class="gm-logo" src="img/logo.png"/>
        <img class="artist-logo" src="img/artist-logo.png"/>
    
        <form class="jotform-form" action="https://secure.jotformz.com/submit.php" method="post" enctype="multipart/form-data" name="form_53014058300642" id="53014058300642" accept-charset="utf-8">
          
          <input type="hidden" name="formID" value="53014058300642" />
          <div class="form-all">
            <ul class="form-section page-section">
            
              <li class="form-line">
                <span class="media-label2">REMETENTE</span>
              </li>
              
              <li class="form-line jf-required" data-type="control_textbox" id="id_9">
                <div id="cid_9" class="form-input jf-required form-group">
                  <div class="al-ct-icon">
                    <img class="input-icon mail-icon" src="img/person.png"/>
                  </div>
                  <input type="text" class="form-control form-textbox validate[required]" data-type="input-textbox" id="input_9" name="q9_remetente" size="20" value="Abraham Mateo" placeholder="REMETENTE"/>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label2">ALCANCE</span>
              </li>
              
              <li class="form-line jf-required" data-type="control_dropdown" id="id_10">
                
                <div id="cid_10" class="form-input jf-required form-group">
                  <div class="al-ct-icon">
                    <img class="input-icon" src="img/globo.png"/>
                  </div>
                  
                  <select class="form-control form-dropdown validate[required]" style="width:100%" id="input_10" name="q10_alcance">
                    
                    <option value="Brasil"> Brasil </option>
                    <option value="AC"> AC </option>
                    <option value="AL"> AL </option>
                    <option value="AP"> AP </option>
                    <option value="AM"> AM </option>
                    <option value="BA"> BA </option>
                    <option value="CE"> CE </option>
                    <option value="DF"> DF </option>
                    <option value="ES"> ES </option>
                    <option value="GO"> GO </option>
                    <option value="MA"> MA </option>
                    <option value="MT"> MT </option>
                    <option value="MS"> MS </option>
                    <option value="MG"> MG </option>
                    <option value="PA"> PA </option>
                    <option value="PB"> PB </option>
                    <option value="PR"> PR </option>
                    <option value="PE"> PE </option>
                    <option value="PI"> PI </option>
                    <option value="RJ"> RJ </option>
                    <option value="RN"> RN </option>
                    <option value="RS"> RS </option>
                    <option value="RO"> RO </option>
                    <option value="RR"> RR </option>
                    <option value="SC"> SC </option>
                    <option value="SP"> SP </option>
                    <option value="SE"> SE </option>
                    <option value="TO"> TO </option>
                  </select>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label2">MENSAGEM</span>
              </li>
              
              <li class="form-line jf-required" data-type="control_textbox" id="id_3">
                <div id="cid_3" class="form-input jf-required form-group">
                  <div class="al-ct-icon">
                    <img class="input-icon mail-icon" src="img/Mail.png"/>
                  </div>
                  <input type="text" class="form-control form-textbox validate[required]" data-type="input-textbox" id="input_3" name="q3_message" size="20" value="" placeholder="MENSAGEM"/>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label2">LINK EXTERNO</span>
              </li>
              
              <li class="form-line call2action" data-type="control_textbox" id="id_4">
                
                <div id="cid_4" class="form-input jf-required form-group ">
                  <div class="al-ct-icon">
                    <img class="input-icon" src="img/link_interno.png"/>
                  </div>
                  <input type="text" class="form-control form-textbox" data-type="input-textbox" id="input_4" name="q4_call2Action" size="20" value="" placeholder="HTTP://..."/>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label2">NOME DO BOTÃO</span>
              </li>
              
              <li class="form-line" data-type="control_textbox" id="id_5">
                
                <div id="cid_5" class="form-group form-input jf-required">
                  <div class="al-ct-icon">
                    <img class="input-icon" src="img/nome_botao.png"/>
                  </div>
                  <input type="text" class="form-control form-textbox" data-type="input-textbox" id="input_5" name="q5_buttonTitle" size="20" value="" placeholder="NOME DO BOTÃO"/>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label">LINK INTERNO?</span>
              </li>
              
              <li class="form-line" data-type="control_radio" id="id_6">
                <div id="cid_6" class="form-input jf-required">
                  <div class="form-single-column radio-container">                
                    <span class="form-radio-item" style="clear:left;">
                      <span class="dragger-item">
                      </span>
                      <input type="radio" class="form-radio radio-musicas" id="input_6_0" name="q6_linkInterno" value="Músicas" />
                      <label id="label_input_6_0" for="input_6_0"> Músicas </label>
                    </span>
                    <span class="form-radio-item" style="clear:left;">
                      <span class="dragger-item">
                      </span>
                      <input type="radio" class="form-radio radio-shows" id="input_6_1" name="q6_linkInterno" value="Shows" />
                      <label id="label_input_6_1" for="input_6_1"> Shows </label>
                    </span>
                  </div>
                </div>
              </li>
              
              <li class="form-line">
                <span class="media-label">FOTOS</span>
              </li>
              
              <li class="form-line media-upload-label">
                <div class="m-u-container">
                  <label class="form-label form-label-left form-label-auto label-photo" id="label_7" for="input_7"> 
                    <img src="img/image-icon.png"/> 
                    <p class="photo-name">jpg e png</p>
                  </label>

                  <label class="form-label form-label-left form-label-auto label-video" id="label_8" for="input_8" style="display:none"> 
                    <img src="img/video-icon.png"/>
                    <p class="video-name" style="display:none;">mp4 e ogg</p>
                  </label>
                </div>
              </li>
              
              <li class="form-line" data-type="control_fileupload" id="id_7">
                <div id="cid_7" class="form-input jf-required">
                  <input class="form-upload aphoto-upload photo-upload" type="file" id="input_7" name="q7_imagem" file-accept="png, jpg, jpeg" file-maxsize="1024" file-minsize="0" file-limit="0" />
                </div>
              </li>
              
              <li class="form-line" data-type="control_fileupload" id="id_8">
                <div id="cid_8" class="form-input jf-required">
                  <input class="form-upload avideo-upload video-upload" type="file" id="input_8" name="q8_video" file-accept="mp4, ogg, 3gp" file-maxsize="10240" file-minsize="0" file-limit="0" />
                </div>
              </li>
              <li class="form-line" data-type="control_button" id="id_2">
                <div id="cid_2" class="form-input-wide">
                  <div class="form-buttons-wrapper">
                    <button id="input_2" type="submit" class="btn">
                      Enviar
                    </button>
                  </div>
                </div>
              </li>
              <li style="display:none">
                Should be Empty:
                <input type="text" name="website" value="" />
              </li>
            </ul>
          </div>
          <input type="hidden" id="simple_spc" name="simple_spc" value="53014058300642" />
          <script type="text/javascript">
          document.getElementById("si" + "mple" + "_spc").value = "53014058300642-53014058300642";
          </script>
        </form>
        
        
        <a href="logout.php" style="display:block;text-align:center;color:white !important;margin-bottom:20px;"><b>Sair</b></a>
        
      </div> <!-- /container -->  
    </div>
    <script src="js/main.js" type="text/javascript"></script>
    
  </body>
</html>