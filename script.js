var audioPlayer = document.getElementById("audio-player");
        var audioSelect = document.getElementById("audio-select");
        var downloadAudio = document.getElementById("download-audio");

        audioSelect.addEventListener("change", function() {
            var selectedAudio = audioSelect.options[audioSelect.selectedIndex].value;
            if (selectedAudio) {
                audioPlayer.src = selectedAudio;
                downloadAudio.href = selectedAudio;
                downloadAudio.style.display = "inline-block";
            }
        });

        document.addEventListener("DOMContentLoaded", function() {
            // Add event listeners for all dropdown submenus
            var dropdowns = document.querySelectorAll('.dropdown-submenu');

            dropdowns.forEach(function(dropdown) {
                dropdown.addEventListener('click', function(event) {
                    // Prevent default click behavior
                    event.stopPropagation();

                    // Toggle the 'show' class to display the submenu
                    this.querySelector('.dropdown-menu').classList.toggle('show');
                });

                // Close the dropdown menu when clicking outside
                document.addEventListener('click', function(event) {
                    var isClickInside = dropdown.contains(event.target);
                    if (!isClickInside) {
                        dropdown.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });
            });
        });
