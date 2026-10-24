/* Slide viewer: shows a deck stored as numbered images, one at a time.
   Images load only when the viewer is first opened. */
(function () {
    function init(root) {
        var count = parseInt(root.getAttribute('data-count'), 10);
        var base = root.getAttribute('data-base');
        var ext = root.getAttribute('data-ext') || 'jpg';
        var img = root.querySelector('.slides-img');
        var label = root.querySelector('.slides-count');
        var prev = root.querySelector('.slides-prev');
        var next = root.querySelector('.slides-next');
        var full = root.querySelector('.slides-full');
        var current = 1;

        function url(k) {
            return base + (k < 10 ? '0' + k : '' + k) + '.' + ext;
        }

        function show(k) {
            current = Math.max(1, Math.min(count, k));
            img.src = url(current);
            img.alt = 'Slide ' + current + ' of ' + count;
            label.textContent = current + ' / ' + count;
            prev.disabled = current === 1;
            next.disabled = current === count;
            // Warm the cache for the neighbours
            [current + 1, current - 1].forEach(function (n) {
                if (n >= 1 && n <= count) { new Image().src = url(n); }
            });
        }

        prev.addEventListener('click', function () { show(current - 1); });
        next.addEventListener('click', function () { show(current + 1); });

        root.addEventListener('keydown', function (e) {
            var handled = true;
            if (e.key === 'ArrowRight' || e.key === 'PageDown') { show(current + 1); }
            else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { show(current - 1); }
            else if (e.key === 'Home') { show(1); }
            else if (e.key === 'End') { show(count); }
            else { handled = false; }
            if (handled) { e.preventDefault(); }
        });

        // Swipe on touch screens
        var startX = null;
        img.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });
        img.addEventListener('touchend', function (e) {
            if (startX === null) { return; }
            var dx = e.changedTouches[0].clientX - startX;
            startX = null;
            if (Math.abs(dx) > 40) { show(current + (dx < 0 ? 1 : -1)); }
        }, { passive: true });

        // Click the slide: right half goes forward, left half goes back
        img.addEventListener('click', function (e) {
            var rect = img.getBoundingClientRect();
            show(current + (e.clientX - rect.left > rect.width / 2 ? 1 : -1));
        });

        if (full && root.requestFullscreen) {
            full.addEventListener('click', function () {
                if (document.fullscreenElement) { document.exitFullscreen(); }
                else { root.requestFullscreen(); }
            });
        } else if (full) {
            full.hidden = true;
        }

        var toggle = root.closest('dl').querySelector('input.t-slides');
        var loaded = false;
        function maybeLoad() {
            if (toggle.checked && !loaded) {
                loaded = true;
                show(1);
            }
        }
        toggle.addEventListener('change', maybeLoad);
        maybeLoad();
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.slides').forEach(init);
    });
})();
