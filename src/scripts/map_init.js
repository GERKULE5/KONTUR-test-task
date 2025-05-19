ymaps.ready(init);
    function init(){
        var myLat = 55.028894;
        var myLng = 82.926493;
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [myLat, myLng],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark([myLat, myLng], {
            hintContent: 'Депутатская улица, 46',
            balloonContent: 'Депутатская улица, 46'
        });
        myMap.geoObjects.add(myPlacemark);
    }