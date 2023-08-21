<?php
$isDev = getenv("ENV") === 'development';

try {
  $manifest = json_decode(file_get_contents($isDev ? './client/dev.manifest.json' : './client/dist/manifest.json'), true);
} catch (Exception $e) {
  error_log($e->getMessage());
}

?>