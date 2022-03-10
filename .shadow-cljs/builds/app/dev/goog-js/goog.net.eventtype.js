["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/eventtype.js"],"~:js","goog.provide(\"goog.net.EventType\");\ngoog.net.EventType = {COMPLETE:\"complete\", SUCCESS:\"success\", ERROR:\"error\", ABORT:\"abort\", READY:\"ready\", READY_STATE_CHANGE:\"readystatechange\", TIMEOUT:\"timeout\", INCREMENTAL_DATA:\"incrementaldata\", PROGRESS:\"progress\", DOWNLOAD_PROGRESS:\"downloadprogress\", UPLOAD_PROGRESS:\"uploadprogress\",};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Common events for the network classes.\n */\n\n\ngoog.provide('goog.net.EventType');\n\n\n/**\n * Event names for network events\n * @enum {string}\n */\ngoog.net.EventType = {\n  COMPLETE: 'complete',\n  SUCCESS: 'success',\n  ERROR: 'error',\n  ABORT: 'abort',\n  READY: 'ready',\n  READY_STATE_CHANGE: 'readystatechange',\n  TIMEOUT: 'timeout',\n  INCREMENTAL_DATA: 'incrementaldata',\n  PROGRESS: 'progress',\n  // DOWNLOAD_PROGRESS and UPLOAD_PROGRESS are special events dispatched by\n  // goog.net.XhrIo to allow binding listeners specific to each type of\n  // progress.\n  DOWNLOAD_PROGRESS: 'downloadprogress',\n  UPLOAD_PROGRESS: 'uploadprogress',\n};\n","~:compiled-at",1645079135651,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.eventtype.js\",\n\"lineCount\":3,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAOAD,IAAKE,CAAAA,GAAIC,CAAAA,SAAT,GAAqB,CACnBC,SAAU,UADS,EAEnBC,QAAS,SAFU,EAGnBC,MAAO,OAHY,EAInBC,MAAO,OAJY,EAKnBC,MAAO,OALY,EAMnBC,mBAAoB,kBAND,EAOnBC,QAAS,SAPU,EAQnBC,iBAAkB,iBARC,EASnBC,SAAU,UATS,EAanBC,kBAAmB,kBAbA,EAcnBC,gBAAiB,gBAdE,EAArB;;\",\n\"sources\":[\"goog/net/eventtype.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Common events for the network classes.\\n */\\n\\n\\ngoog.provide('goog.net.EventType');\\n\\n\\n/**\\n * Event names for network events\\n * @enum {string}\\n */\\ngoog.net.EventType = {\\n  COMPLETE: 'complete',\\n  SUCCESS: 'success',\\n  ERROR: 'error',\\n  ABORT: 'abort',\\n  READY: 'ready',\\n  READY_STATE_CHANGE: 'readystatechange',\\n  TIMEOUT: 'timeout',\\n  INCREMENTAL_DATA: 'incrementaldata',\\n  PROGRESS: 'progress',\\n  // DOWNLOAD_PROGRESS and UPLOAD_PROGRESS are special events dispatched by\\n  // goog.net.XhrIo to allow binding listeners specific to each type of\\n  // progress.\\n  DOWNLOAD_PROGRESS: 'downloadprogress',\\n  UPLOAD_PROGRESS: 'uploadprogress',\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"net\",\"EventType\",\"COMPLETE\",\"SUCCESS\",\"ERROR\",\"ABORT\",\"READY\",\"READY_STATE_CHANGE\",\"TIMEOUT\",\"INCREMENTAL_DATA\",\"PROGRESS\",\"DOWNLOAD_PROGRESS\",\"UPLOAD_PROGRESS\"]\n}\n"]