class Novaposhta{
 	/* Город отправителя */
	 public static $out_city='Киев';
 	/* Отправитель */	 
	 public static $out_company='ПП Петров';
 	/* Склад */	 
	 public static $out_warehouse='1';	 
 	/* Представитель отправителя */	 
	 public static $out_name='Петров Иван Иваныч';	 
 	/* Телефон отправителя */	 
	 public static $out_phone='0671234567';	 
 	/* API ключ */	 
	 public static $api_key='02158e13f8998d1fd3c4511ff4f160f2';	 
 	/* Описание посылки */	 
	 public static $description='Взуття';
 	/* Описание упаковки */	 
	 public static $pack='Коробка';	 
	 	 
	 /**
	  * Функция отправки запроса на сервер Новой почты
	  	$xml — запрос
	  */
	 static public function send($xml){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, 'http://orders.novaposhta.ua/xml.php');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		$response = curl_exec($ch);
		curl_close($ch);
		return $response;
	 }
	 
	 /**
	  * Запрос на расчёт стоимости доставки 
	  	$to_city — город получатель
	  	$weight — вес
	  	$pub_price — заявленная стоимость
	  	$height — высота коробки	  		  		  	
	  	$width — ширина коробки	  		  		  	
	  	$depth — длинна коробки	  		  		  		  	
	  */
	 public static function price($to_city,$weight,$pub_price,$date,$height=0,$width=0,$depth=0){
		$xml='
		
		'.NP::$api_key.'
		
        	'.NP::$out_city.'
        	'.$to_city.'
        	'.$weight.'
        	'.$depth.'
        	'.$width.'
        	'.$depth.'
        	'.$pub_price.'
        	4
        	0
        	'.$date.'
        	
        ';
		
		$xml = simplexml_load_string(NP::send($xml));
		return $xml->cost;
	} 	
	 /**
	  * Запрос на создание декларации на отправку 
	  	$order_id — номер заказа на вашем сайте (для вашего удобства)
	  	$city — город получения
	  	$warehouse — номер склада получения
	  	$name — имя получателя	  		  		  	
	  	$surname — фамилия получателя	  		  		  	
	  	$phone — телефон получателя	  		  		  		  	
	  	$weight — вес посылки	  		  		  	
	  	$pub_price — заявленная стоимость	  		  		  	
	  	$date — дата отправки
	  	$payer — плательщик (1 — получатель, 0 — отправитель, 2 — третья сторона)	  	
	  */
	 public static function ttn($order_id,$city,$warehouse,$name,$surname,$phone,$weight,$pub_price,$date,$payer=0){
		$xml='
		
		'.NP::$api_key.'
		
	        
            
        ';
		
		$xml = simplexml_load_string(NP::send($xml));
		return array('oid'=>$order_id,'ttn'=>trim($xml->order->attributes()->np_id));
	} 
	
	 /**
	  * Запрос на удаление декларации из базы Новой почты
	  	$ttn — номер декларации, которую нужно удалить
	  */
	public static function remove($ttn){
		$xml='
		
		'.NP::$api_key.'
		'.$ttn.'
		';
		
		$xml = simplexml_load_string(NP::send($xml));
	}
	 /**
	  * Запрос на печать маркировок для декларации (производит перенаправление на страницу печати)
	  	$ttn — номер декларации, которую нужно напечатать
	  */	
	public static function printit($ttn){
		header('location: http://orders.novaposhta.ua/pformn.php?o='.$ttn.'&num_copy=4&token='.NP::$api_key);
	}
	
	
	 /**
	  * Запрос на получение списка складов Новой почты для определённого города (или полный список, если город не указан)
	  	$filter — город, по которому нужно отфильтровать список складов Новой почты
	  */
	public static function warenhouse($filter=false){
		$xml='
		
		'.NP::$api_key.'
		';
		if($filter){
			$xml.=''.$filter.'';
		}
		$xml.='';
		
		$xml = simplexml_load_string(NP::send($xml));
		return($xml);
	}
	
	
	 /**
	  * Запрос на получение списка населённых пунктов, в которых есть склады Новой почты
	  */	
	public static function city(){
		$xml='
		
		'.NP::$api_key.'
		
		';
		
		$xml = simplexml_load_string(NP::send($xml));
		return($xml);
	}

	public static function cities_array(){
		$cities=NP::city();
		$states_cities=array();
		foreach($cities->result->cities->city as $city){
			if(!isset($states_cities[trim($city->areaNameUkr)]))
				$states_cities[trim($city->areaNameUkr)]=array();
			$states_cities[trim($city->areaNameUkr)][]=trim($city->nameUkr);
		}
		return $states_cities;
	}

		 
 }
 