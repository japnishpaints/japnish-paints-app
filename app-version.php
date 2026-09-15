<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
/* Change these values only when publishing a new APK. */
echo json_encode([
  'success'=>true,
  'version'=>'68.0.0',
  'force_update'=>false,
  'apk_url'=>'/mobile/app/JapnishPaints.apk'
], JSON_UNESCAPED_SLASHES);
