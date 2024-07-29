import '@/styles/legal.css';

type Config = {
  hosting: 'hetzner' | 'vercel';
  name: string;
  street: string;
  place: string;
  email: string;
  umami?: boolean;
  cloudflare?: boolean;
  contact?: boolean;
  brevo?: boolean;
  youtube?: boolean;
  auth?: boolean;
};

const config: Config = {
  hosting: 'vercel',
  name: 'Christian Heinz',
  street: 'Annastraße 12',
  place: '97072 Würzburg',
  email: 'funo@duck.com',
  cloudflare: true,
};

const PrivacyPage = () => {
  return (
    <>
      <main id='legal'>
        <div className='wrapper'>
          <h1>Datenschutz&shy;erkl&auml;rung</h1>
          <h2>Datenschutz im Überblick</h2>
          <h3>Allgemeine Hinweise</h3>{' '}
          <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
            Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
          </p>
          <h3>Datenerfassung auf dieser Website</h3>{' '}
          <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4>{' '}
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten k&ouml;nnen Sie dem Abschnitt{' '}
            <a href='/privacy#hinweis-zur-verantwortlichen-stelle'>
              &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo;
            </a>
            in dieser Datenschutzerkl&auml;rung entnehmen.
          </p>{' '}
          <h4>Wie erfassen wir Ihre Daten?</h4>{' '}
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>{' '}
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
            Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>{' '}
          <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{' '}
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens
            verwendet werden.
          </p>{' '}
          <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{' '}
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese
            Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
            Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei
            der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
          </p>{' '}
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an
            uns wenden.
          </p>
          <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{' '}
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
            geschieht vor allem mit sogenannten Analyseprogrammen.
          </p>{' '}
          <p>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
            Datenschutzerkl&auml;rung.
          </p>
          <h2>Hosting und Content Delivery Networks (CDN)</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          {/* Hosting */}
          {config.hosting === 'vercel' && (
            <>
              <h3>Vercel</h3>{' '}
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.
              </p>{' '}
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber
                unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
                Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
                Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>{' '}
              <p>
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur
                Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in
                Bezug auf diese Daten befolgen.
              </p>{' '}
              <p>Wir setzen folgende(n) Hoster ein:</p>
              <p>
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                privacy@vercel.com
              </p>
            </>
          )}
          {config.hosting === 'hetzner' && (
            <>
              <h3>Hetzner</h3>{' '}
              <p>
                Hetzner Online GmbH
                <br />
                Industriestr. 25
                <br />
                91710 Gunzenhausen
              </p>{' '}
              <p>
                Details entnehmen Sie der Datenschutzerkl&auml;rung von Hetzner:{' '}
                <a
                  href='https://www.hetzner.com/de/rechtliches/datenschutz'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.hetzner.com/de/rechtliches/datenschutz
                </a>
                .
              </p>{' '}
              <p>
                Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
                haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen
                Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a
                DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
                Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
                widerrufbar.
              </p>
            </>
          )}
          <h4>Auftragsverarbeitung</h4>
          <p>
            Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben
            genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
            vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen
            Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
            verarbeitet.
          </p>
          {/* CDN */}
          {config.cloudflare && (
            <>
              <h3>Cloudflare</h3>
              <p>
                Wir nutzen den Service &bdquo;Cloudflare&ldquo;. Anbieter ist die Cloudflare Inc.,
                101 Townsend St., San Francisco, CA 94107, USA (im Folgenden
                &bdquo;Cloudflare&rdquo;).
              </p>
              <p>
                Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Dabei
                wird technisch der Informationstransfer zwischen Ihrem Browser und unserer Website
                &uuml;ber das Netzwerk von Cloudflare geleitet. Das versetzt Cloudflare in die Lage,
                den Datenverkehr zwischen Ihrem Browser und unserer Website zu analysieren und als
                Filter zwischen unseren Servern und potenziell b&ouml;sartigem Datenverkehr aus dem
                Internet zu dienen. Hierbei kann Cloudflare auch Cookies oder sonstige Technologien
                zur Wiedererkennung von Internetnutzern einsetzen, die jedoch allein zum hier
                beschriebenen Zweck verwendet werden.
              </p>
              <p>
                Der Einsatz von Cloudflare beruht auf unserem berechtigten Interesse an einer
                m&ouml;glichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6
                Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der
                EU-Kommission gest&uuml;tzt. Details finden Sie hier:
                <a
                  href='https://www.cloudflare.com/privacypolicy/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.cloudflare.com/privacypolicy/
                </a>
                .
              </p>
              <p>
                Weitere Informationen zum Thema Sicherheit und Datenschutz bei Cloudflare finden Sie
                hier:
                <a
                  href='https://www.cloudflare.com/privacypolicy/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.cloudflare.com/privacypolicy/
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US
                Data Privacy Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der
                Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA gew&auml;hrleisten soll.
                Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
                Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:
                <a
                  href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnZKAA0&status=Active'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnZKAA0&status=Active
                </a>
                .
              </p>
              <h4>Auftragsverarbeitung</h4>
              <p>
                Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben
                genannten Dienstes geschlossen. Hierbei handelt es sich um einen
                datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser
                die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und
                unter Einhaltung der DSGVO verarbeitet.
              </p>
            </>
          )}
          {/* Allgemein */}
          <h2>Allgemeine Hinweise und Pflicht&shy;informationen</h2>
          <h3>Datenschutz</h3>{' '}
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
          </p>{' '}
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
            k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
            erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck
            das geschieht.
          </p>{' '}
          <p>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
            Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
            Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>
          <h3 id='hinweis-zur-verantwortlichen-stelle'>Hinweis zur verantwortlichen Stelle</h3>{' '}
          <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>{' '}
          <p>
            {config.name}
            <br />
            {config.street}
            <br />
            {config.place}
          </p>
          <p>
            <span style={{ display: 'flex', gap: '6px' }}>
              E-Mail:
              <a className='mail-link' href={`mailto:${config.email}`}>
                {config.email}
              </a>
            </span>
          </p>
          <p>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
            gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von
            personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </p>
          <h3>Speicherdauer</h3>{' '}
          <p>
            Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r
            die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen
            geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
            Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
            f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
            L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
          </p>
          <h3>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
          </h3>{' '}
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
            personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
            lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
            werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
            personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf
            Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
            oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
            Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich
            auf Grundlage von &sect; 25 Abs. 1 TDDSG. Die Einwilligung ist jederzeit widerrufbar.
            Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
            Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1
            lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung
            einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c
            DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses
            nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall
            einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
            Datenschutzerkl&auml;rung informiert.
          </p>
          <h3>Empfänger von personenbezogenen Daten</h3>{' '}
          <p>
            Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen
            Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen
            Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann
            an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich
            ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
            Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f
            DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
            Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir
            personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags
            &uuml;ber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein
            Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
          <p>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen
            Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit
            widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
          </p>
          <h3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen
            Direktwerbung (Art. 21 DSGVO)
          </h3>{' '}
          <p>
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. e oder f DSGVO erfolgt,
            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
            dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
            Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
            Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
            personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
            schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
            Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
          </p>{' '}
          <p>
            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben
            Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
            personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
            Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
            widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke
            der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
          </p>
          <h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3>{' '}
          <p>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres
            gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
            Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger
            verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>
          <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{' '}
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
            Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
            in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
            die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen,
            erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{' '}
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren
            Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
          </p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{' '}
          <p>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
            Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
          </p>{' '}
          <ul>
            {' '}
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
              bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen.
              F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>{' '}
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
              geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
              Datenverarbeitung verlangen.
            </li>{' '}
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
              Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
              ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>{' '}
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
              Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
              nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>{' '}
          </ul>{' '}
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben,
            d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer
            Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
            juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses
            der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          {/* SSL und TLS */}
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{' '}
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
            vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
            Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
            &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
            Ihrer Browserzeile.
          </p>{' '}
          <p>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die
            Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
          </p>
          {/* Onsite */}
          <h2>Datenerfassung auf dieser Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
            Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
            Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die
            Server-Log-Files erfasst werden.
          </p>
          {/* Kontaktanfrage */}
          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
            Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
            Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
            oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
            die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis
            Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
            der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
            Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </p>
          {/* Kontaktformular */}
          {config.contact && (
            <>
              <h3>Kontaktformular</h3>{' '}
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>{' '}
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder
                zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>{' '}
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </p>
              {config.brevo && (
                <p>
                  Um die Kontaktanfrage als transaktionelle Email zu versenden nutzen wir einen
                  Service von dem Anbieter Brevo (Sendinblue GmbH). Hierbei wird aus technischen
                  Gründen die Email des Absenders an den Anbieter übermittelt. Die Absenderadressen
                  werden auf den Servern des Anbieters für den Zeitraum von einen Monat gespeichert
                  und anschließend gelöscht. Der Inhalt der Kontaktanfrage wird dabei nicht beim
                  Anbieter mitgespeichert.{' '}
                  <a href='https://www.brevo.com/de/legal/privacypolicy/'>
                    https://www.brevo.com/de/legal/privacypolicy/
                  </a>
                </p>
              )}
            </>
          )}
          {/* Analyse  */}
          {config.umami && (
            <>
              <h2>Analyse-Tools</h2>
              <h3>Umami</h3>{' '}
              <p>
                Diese Website benutzt den Open Source Webanalysedienst{' '}
                <a href='https://umami.is/'>Umami</a>.
              </p>{' '}
              <p>
                Mit Hilfe von Umami erfassen und analysieren wir anonymisierte Daten zur Nutzung
                unserer Website. So können wir z.B. erkennen, welche Seiten aufgerufen werden und
                aus welcher Region der Zugriff erfolgt. Umami zeichnet dabei jedoch keine
                IP-Adressen auf und speichert keine Informationen auf Ihrem Endgerät, wie z.B.
                Cookies. Dies gewährleistet, dass Ihre Nutzung der Website nicht auf Ihre Person
                zurückführbar ist.
              </p>
              <p>
                Die Nutzung von Umami erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse besteht in der anonymisierten Analyse des Nutzerverhaltens,
                um unser Webangebot zu optimieren. Sofern hierzu Ihre Einwilligung abgefragt und
                erteilt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
                1 lit. a DSGVO und § 25 Abs. 1 TTDDG, soweit die Einwilligung die Speicherung von
                Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.B.
                Device-Fingerprinting) umfasst. Die Einwilligung kann jederzeit widerrufen werden.
              </p>
              <h4>Hosting</h4>{' '}
              <p>
                Hosting Wir betreiben Umami ausschließlich auf unseren eigenen Servern, sodass alle
                Analysedaten bei uns verbleiben und nicht an Dritte weitergeleitet werden. Dies
                garantiert, dass die Datenverarbeitung in einer sicheren und kontrollierten Umgebung
                stattfindet.
              </p>
            </>
          )}
          {config.auth && (
            <>
              <h3>Registrierung auf dieser Website</h3>
              <p>
                Sie k&ouml;nnen sich auf dieser Website registrieren, um zus&auml;tzliche Funktionen
                auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke
                der Nutzung des jeweiligen Angebotes oder Dienstes, f&uuml;r den Sie sich
                registriert haben. Die bei der Registrierung abgefragten Pflichtangaben m&uuml;ssen
                vollst&auml;ndig angegeben werden. Anderenfalls werden wir die Registrierung
                ablehnen.
              </p>
              <p>
                F&uuml;r wichtige &Auml;nderungen etwa beim Angebotsumfang oder bei technisch
                notwendigen &Auml;nderungen nutzen wir die bei der Registrierung angegebene
                E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
              </p>
              <p>
                Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der
                Durchf&uuml;hrung des durch die Registrierung begr&uuml;ndeten
                Nutzungsverh&auml;ltnisses und ggf. zur Anbahnung weiterer Vertr&auml;ge (Art. 6
                Abs. 1 lit. b DSGVO).
              </p>
              <p>
                Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie
                auf dieser Website registriert sind und werden anschlie&szlig;end gel&ouml;scht.
                Gesetzliche Aufbewahrungsfristen bleiben unber&uuml;hrt.
              </p>

              <p>
                Für die Account-Verwaltung (Authorisierung) und die Speicherung Account bezogener
                Daten verwenden wir Supabase auf Grundlage des Art. 6 Abs. 1 lit. b) DSGVO. Supabase
                ist ein DGSVO-konformer Dienst für Cloud-Datenbanken und Backend-Lösungen mit
                Hauptsitz in 970 Toa Payoh North #07-04, Singapore 318992.
              </p>
              <h4>Auftragsverarbeitung</h4>
              <p>
                Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben
                genannten Dienstes geschlossen. Hierbei handelt es sich um einen
                datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser
                die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und
                unter Einhaltung der DSGVO verarbeitet.
              </p>
              <p>
                Für nähere Informationen besuchen Sie bitte
                https://supabase.io/docs/company/privacy.
              </p>
            </>
          )}
          {/* Youtube */}
          {config.youtube && (
            <>
              <h2>Plugins und Tools</h2>
              <h3>YouTube mit erweitertem Datenschutz</h3>
              <p>
                Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die
                Google Ireland Limited (&bdquo;Google&rdquo;), Gordon House, Barrow Street, Dublin
                4, Irland.
              </p>
              <p>
                Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine
                Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server
                mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem
                YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr Surfverhalten
                direkt Ihrem pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern,
                indem Sie sich aus Ihrem YouTube-Account ausloggen.
              </p>
              <p>
                Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im erweiterten
                Datenschutzmodus abgespielt werden, werden nach Aussage von YouTube nicht zur
                Personalisierung des Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten
                Datenschutzmodus ausgespielt werden, sind ebenfalls nicht personalisiert. Im
                erweiterten Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden jedoch
                sogenannte Local Storage Elemente im Browser des Users gespeichert, die &auml;hnlich
                wie Cookies personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt
                werden k&ouml;nnen. Details zum erweiterten Datenschutzmodus finden Sie hier:
                <a
                  href='https://support.google.com/youtube/answer/171780'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://support.google.com/youtube/answer/171780
                </a>
                .
              </p>
              <p>
                Gegebenenfalls k&ouml;nnen nach der Aktivierung eines YouTube-Videos weitere
                Datenverarbeitungsvorg&auml;nge ausgel&ouml;st werden, auf die wir keinen Einfluss
                haben.
              </p>
              <p>
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer
                Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
                lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
                und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
                den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
                widerrufbar.
              </p>
              <p>
                Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie in deren
                Datenschutzerkl&auml;rung unter:
                <a
                  href='https://policies.google.com/privacy?hl=de'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US
                Data Privacy Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der
                Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA gew&auml;hrleisten soll.
                Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
                Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:
                <a
                  href='https://www.dataprivacyframework.gov/participant/5780'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.dataprivacyframework.gov/participant/5780
                </a>
                .
              </p>
            </>
          )}
          <p>
            Diese Datenschutzerklärung wurde mit{' '}
            <a href='https://www.e-recht24.de/'>e-recht24.de</a> erstellt und stellenweise ergänzt
            oder angepasst.
          </p>
        </div>
      </main>
    </>
  );
};
export default PrivacyPage;
