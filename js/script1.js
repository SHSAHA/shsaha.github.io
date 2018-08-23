<script>
<video id="v1" poster=“video.png” controls>
 <source src=“video.ogv” type=”video/ogg”>
 <source src=“video.mp4” type=”video/mp4”>
</video>

<script type="text/javascript">;
video = document.getElementsByTagName("video")[0];

for (i=0; i < video.audioTracks.length; i++) {
  if (video.audioTracks[i].language.substring(0,2) === "fr") {
    video.audioTracks[i].enabled = true;
  } else {
    video.audioTracks[i].enabled = false;
  }
}
</script>