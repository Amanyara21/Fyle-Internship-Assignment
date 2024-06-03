$(document).ready(function () {
    const dotContainer = $('.dots');
    const imageContainer = $('.imageContainer');
    const dotClass = 'selected';
    const gap = 30;

    function updateDotSelection() {
        const scrollLeft = imageContainer.scrollLeft();
        const imageWidth = imageContainer.find('img').first().width();
        const currentImageIndex = Math.floor(scrollLeft / imageWidth);
        dotContainer.find(`.${dotClass}`).removeClass(dotClass);
        dotContainer.find(`.dot:eq(${currentImageIndex})`).addClass(dotClass);
    }

    $('.dot').click(function () {
        const clickedIndex = $(this).index();
        const scrollWidth = clickedIndex * imageContainer.find('img').first().width() + gap;

        imageContainer.scrollLeft(scrollWidth)
        $('.dot').removeClass('selected');
        $(this).addClass('selected');
    });

    imageContainer.scroll(function () {
        updateDotSelection();
    });

    updateDotSelection();



    $('.box').on('click', function() {
        var imageIndex = $(this).data('image');
        $('.box').removeClass('active');
        $('.project-image').removeClass('active');
        $(this).addClass('active');
        $('.project-image').eq(imageIndex).addClass('active');
    });

    $('#contactBtn').click(function () {
        $('.contact-form-container').removeClass('hidden');
        $('body').css('overflow', 'hidden');
        $('body').css('background', 'grey');
        $('img').css('opacity', '0.5');
    });


    // $('#contact-form').submit(function (event) {
    //     event.preventDefault();
    //     const form = $(this);

    //     $.ajax({
    //         type: form.attr('method'),
    //         url: form.attr('action'),
    //         data: form.serialize(),
    //         success: function (response) {
    //             $('#contactForm').addClass('hidden');
    //             $('body').css('overflow', 'auto'); 
    //             $('body').css('background', 'auto');
    //             $('img').css('opacity', '1');
    //         },
    //         error: function (error) {
    //             alert('Error submitting form!');
    //         }
    //     });
    // });


});