// Definir mapa
function initialize() {
    var mapOptions = {
        // Zoom do mapa no inicio
        zoom: 10,
        // Coordenadas do centro inicial no inicio (Sao Paulo)
        center: new google.maps.LatLng(-23.469326239816162, -46.55739566849813),
  
        // Tipos de mapas (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Zoom minimo do mapa
        minZoom: 2
    };

    // Criar uma nova instancia dde mapa usando as opcoes fornecidas 
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Criar uma janela de informacoes para exibir informaçoes de localizacao 
    var infoWindow = new google.maps.InfoWindow();

    // Criar um marcador de exemplo: Guarulhos-SP
    var marker = new google.maps.Marker({
        // coordenadas para Guarulhos minha casa
        position: new google.maps.LatLng(-23.469326239816162, -46.55739566849813),
        // Anexar o marcador
        map: map,
        // Dica ao passar o mouse
        title: 'MinhaCasa'
    });

    // Adicionar ouvinte de evento de clique para o marcador
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Ajustar o centro do mapa quando a janela for redimensionada
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Inicializar o mapa quando o carregamento da janela for concluido
google.maps.event.addDomListener(window, 'load', initialize);