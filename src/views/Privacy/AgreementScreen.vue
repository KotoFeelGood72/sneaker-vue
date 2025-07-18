<template>
  <div class="container">
    <h1 class="lg:text-40 text-dark font-semibold text-22 lg:mb-0 mb-5">
      Пользовательское соглашение
    </h1>
    <p class="lg:py-[60px] lg:text-16 text-10 lg:mb-0 mb-4">
      Настоящее Соглашение определяет порядок использования Платформы Пользователями.
      Любой Пользователь, который использует Платформу, должен соблюдать условия
      Соглашения. Помимо условий настоящего Соглашения, Пользователи должны соблюдать
      условия приложений к нему.
    </p>
    <div class="flex flex-col lg:gap-[60px] gap-4">
      <ColText v-for="item in ColsText" :title="item.title" :text="item.text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColText from "@/components/Shared/ColText.vue";

const ColsText = [
  {
    title: "1. Термины и определения",
    text: ` 1.1. Авторизационные данные – данные, используемые для входа в Личный кабинет после Регистрации Пользователя на Платформе.
        1.2. Агент – то же, что и Компания.
        1.3. Агентский договор – договор между Покупателем и Агентом, заключенный путем направления от Покупателя к Агенту Поручения. Документами, регулирующими порядок заключения и исполнения Агентского договора, является настоящее Соглашение и приложения к нему.
        1.4. Поручение – действия Покупателя, совершенные с использованием Платформы, в результате которых формируется предложение по заключению Агентского договора. Такое предложение по заключению Агентского договора направляется в Компанию для рассмотрения и принятия.
        1.5. Карточка товара – страница Товара в Интернет-магазине, которая содержит все существенные условия договора дистанционной купли-продажи Товара, и которая позволяет однозначно идентифицировать приобретаемый Товар.
        1.6. Контент – размещенная (воспроизведенная) на Платформе совокупность результатов интеллектуальной деятельности (РИД), а также каждый РИД в отдельности, включая, но не ограничиваясь: любая текстовая информация, изображения, фотографии, ссылки, видеозаписи, аудиозаписи, и так далее. Правообладателем Контента является Компания либо третьи лица - правообладатели.
        1.7. Компания – ИП Мельников Владислав Александрович, ИНН: 027415666058, ОГРНИП: 322028000178690, email: info@sneakerteam.ru
        1.8. Личный кабинет – персональный раздел Платформы, доступный Пользователю после успешной Регистрации. Доступ в Личный кабинет обеспечивается вводом Пользователем Авторизационных данных.
        1.9. Интернет-магазин – совокупное упоминание сторонних веб-сайтов, функционал которых направлен на продажу Товаров их владельцев (интернет-магазин), либо продажу Товаров третьих лиц (маркетплейс), поддержка покупки и последующей доставки Товаров на Склад которых на условиях заключенного между Агентом и Покупателем Агентского договора обеспечивается Компанией на условиях Соглашения.
        1.10. Пользователь – физическое лицо, достигшее возраста 18 лет и обладающее полной правоспособностью, которое приняло условия Соглашения.
        1.11. Покупатель – лицо, которое намеревается формировать Поручения на покупку Товаров, предназначенных для рассмотрения и принятия Агентом, в результате принятия которых будет считаться заключенным Агентский договор, где Покупатель будет принципалом. Покупателем может быть либо 1) лицо, направляющее сообщение Компании с использованием соответствующей Социальной сети, либо 2) Пользователь, прошедший Регистрацию на Платформе.
        1.12. Продавец – владелец Товара на Интернет-магазине.
        1.13. Платформа – принадлежащий Компании программно-аппаратный комплекс «sneaker team» по адресу: www.sneakerteam.ru, функциональное назначение которого указано в разделе 2 Соглашения.
        1.14. Социальные сети – официальные ресурсы Компании в сети интернет по адресам: 
        1.15. Политика обработки персональных данных и файлов Cookie – приложение к Соглашению, регулирующее порядок обработки Компанией персональных данных Пользователей, размещенное в сети Интернет по URL-ссылке: https://www.sneakerteam.ru/privacy-policy
        1.16. Правила совершения платежей и возврата оплаты – приложение к Соглашению, регулирующие порядок совершения оплаты и возврата Товара, размещенное в сети Интернет по URL-ссылке: https://www.sneakerteam.ru/payment-and-refund
        1.17. Регистрация – функционал Платформы (сайта www.sneakerteam.ru или соответствующей Социальной сети), направленный на создание Личного кабинета. Порядок прохождения процедуры Регистрации на сайте сайта www.sneakerteam.ru описывается в соответствующем разделе настоящего Соглашения.
        1.18. Регистрационные данные – указанная на Платформе совокупность данных, предоставляемая Пользователем при прохождении процедуры Регистрации: имя пользователя и логин в мессенджере Telegram.
        1.19. Соглашение – настоящее Пользовательское соглашение, размещенное в сети Интернет по URL-ссылке: https://www.sneakerteam.ru/user-agreement
        1.20. Товар – имущество Продавца, предложение о приобретении которого размещено Продавцом на одном из Интернет-магазинов.
        1.21. Термины, которые употребляются в настоящем документе, но которым не было дано определение, понимаются в значении, которое придается им приложениями к Соглашению, а в последнюю очередь - в значении, которое придается им в сети Интернет.
        `,
  },
  {
    title: "2. Предмет Соглашения",
    text: `2.1. На условиях настоящего Соглашения Компания предоставляет возможность заключить Агентский договор между Компанией и Покупателем следующим образом:
    2.1.1. Пользователям, прошедшим Регистрацию в качестве Покупателей, предоставляется возможность заключать Агентские договоры с Агентом на сайте www.sneakerteam.ru, направляя Поручение.
    2.1.2. Через функционал Социальных сетей Покупатели, прошедшие регистрацию (или аналогичную процедуру) в соответствующей Социальной сети, получают возможность заключать Агентские договоры с Агентом, направляя Поручение путем отправления сообщения, содержащего всю необходимую информацию, через функционал соответствующей Социальной сети.
    2.2. Неотъемлемыми приложениями к Соглашению являются: Политика обработки персональных данных и файлов Cookie, Правила совершения платежей и возврата оплаты, приложения к указанным документам, а также иные документы, размещенные на Платформе, если в них напрямую указано в том, что такие документы являются приложением к Соглашению.
    `,
  },
  {
    title: "3. Гарантии и заверения Пользователя",
    text: `Принимая условия настоящего Соглашения, как это установлено соответствующим разделом Соглашения, Пользователь предоставляет безусловную гарантию в отношении нижеследующего:
    3.1. достижение возраста 18 лет либо иного возраста полной право- и дееспособности, согласно законам страны, гражданином, подданным которой он/она является;
    3.2. наличие всех необходимых полномочий для присоединения к настоящему Соглашению, заключения и исполнения Агентского договора;
    3.3. отсутствуют любые иные договорные или законные основания, которые мешают присоединению и(или) исполнению Соглашения в полном объеме;
    3.4. введенные Пользователем Регистрационные данные будут полными и достоверными;
    3.5. Пользователь является и будет являться единоличным обладателем и правомерным собственником Авторизационных данных, а при утрате к ним обязуется немедленно сообщить об этом Компании и действовать согласно полученным инструкциям. Авторизация с использованием чужих Авторизационных данных не допускается;
    3.6. понимает, что все действия на Платформе, совершенные с использованием его Личного кабинета, открытого при Регистрации, считаются совершенными им самим, и Пользователь несет все риски за соблюдение указанной гарантии. При выбытии из владения Авторизационных данных Пользователь обязуется немедленно известить об этом Компанию;
    3.7. Пользователь осведомлен о необходимости соблюдать должные меры безопасности для того, чтобы не допускать доступа третьих лиц к электронной почте, указанной при Регистрации;
    3.8. При заключении Агентского договора, Пользователь тем самым предоставляет безусловную гарантию следующих обстоятельств: 1) он внимательно изучил и согласен со всеми условиями Соглашения и приложений к нему, 2) воля Пользователя в точности соответствует существу его конклюдентных действий, совершаемых на Платформе, 3) Пользователь имеет реальную возможность по исполнению обязательств, предусмотренных Агентским договором, на условиях, указанных в Соглашении, приложении к нему, а также содержащихся в Поручении.
    Использование Платформы, заключение Агентского договора, реализация прав и обязанностей по нему в нарушение хотя бы одной гарантии категорически не допускается.
    `,
  },
  {
    title: "4. Принятие условий Соглашения",
    text: ` 4.1. Подтверждением согласия с условиями Соглашения путем принятия его условий на Платформе будет служить следующее конклюдентное действие Пользователя, совершаемое им в момент Регистрации на Платформе:
    Установка значка       рядом с графой: «Я ознакомился и согласен с условиями Пользовательского соглашения, Политикой обработки персональных данных и файлов Cookie, Правилами совершения платежей и возврата оплаты, и приложений к ним»
    4.1.1. В том случае, если Пользователь не проходит Регистрацию, то он считается принявшим условия Соглашения в соответствующей части, если он немедленно не покинул Сайт.
    4.2. Подтверждением согласия с условиями Соглашения путем принятия его условий в соответствующей Социальной сети служить следующее конклюдентное действие Пользователя, совершаемое им в момент использования функционала соответствующей Социальной сети:
    Отправление Поручение Компании, путем отправления сообщения представителю Компании в Социальной сети. Указанное действие считается совершенным Пользователем в момент, когда сообщение было доставлено Компании.
    `,
  },
  {
    title: "5. Правила принятия условий Соглашения",
    text: ` 5.1. Принятие условий Соглашения допускается лицами, отвечающими требованиям к Пользователю, с учетом гарантий и заверений Пользователя, указанных в соответствующем разделе. Принятие условий Соглашения иными лицами не допускается. При выявлении указанного факта, Компания вправе немедленно расторгнуть Соглашение и заблокировать доступ в Личный кабинет.
    5.2. Перед принятием условий Соглашения, Пользователь должен внимательно изучить условия Соглашения, и согласиться с ними. Согласие «под условием», с замечаниями и т.п. не допускается.
    5.3. Стороны согласовали возможность доказывания факта заключения Соглашения, в том числе, путем предоставления Компанией выписки из своей базы данных о наличии сведений, зафиксированных путем логирования действий Пользователя на Платформе, или иным аналогичным способом.
    `,
  },
  {
    title: "6. Регистрация на Платформе",
    text: ` 6.1. До прохождения процедуры Регистрации, Пользователь может использовать и знакомиться с некоторыми функциями Платформы. Для полноценного использования функционала Платформы, Пользователь должен получить доступ к Личному кабинету. Личный кабинет становится доступным Пользователю после успешного прохождения процедуры Регистрации.
    6.2. Для прохождения процедуры Регистрации на сайте Компании в качестве Покупателя, пользователь должен перейти по ссылке: https://kicksie.ru, указать Регистрационные данные после перехода по кнопке «Вход».
    6.3. Последним шагом процедуры Регистрации будет согласие с условиями настоящего Соглашения и приложений к нему.
    6.4. Заявки на Регистрацию Покупателей обрабатываются в автоматическом порядке, с использованием мессенджера Telegram. Регистрация считается завершенной в момент, когда после отправки Пользователем сообщения в телеграм-бот был получен ответ об успешной Регистрации. После прохождения процедуры Регистрации Покупателя, ему становится доступным Личный кабинет на Платформе.
    6.5. Компания вправе отказать Пользователю в Регистрации без объяснения причин, либо заблокировать ранее открытый Личный кабинет.
    `,
  },
  {
    title: "7. Личный кабинет на Платформе",
    text: ` 7.1. Пользователь получает доступ в Личный кабинет путем ввода Авторизационных данных в специальное поле на Платформе.
    7.2. Личный кабинет состоит из отдельных разделов (функциональных блоков), назначение которых обусловлено их явными пользовательскими функциями.
    7.3. В Личном кабинете Пользователь может дополнительно указать данные о себе, а именно: 1) Имя, 2) Фамилию, 3) Телефон. Указанные данные будут необходимы для того, чтобы Компания могла исполнить Агентский договор.
    `,
  },
  {
    title: "8. Предмет Агентского договора",
    text: ` 8.1. Заключение Агентского Договора осуществляется в порядке и на условиях, указанных в Соглашении.
    8.2. На условиях Агентского договора, Покупатель поручает, а Агент принимает на себя обязательства за вознаграждение совершить юридические и иные действия по приобретению Товаров в Интернет-магазине и доставке Товаров Покупателю, в соответствии с Поручением Покупателя, которое Агент принял к исполнению.
    `,
  },
  {
    title: "9. Порядок заключения Агентского договора через Платформу",
    text: ` 9.1. Заключение Агентского договора через Платформу происходит путем направления предложения в виде Поручения о заключении договора (далее - Оферты) Покупателем в нижеуказанном порядке:
    9.1.1. Для заключения Агентского договора Покупатель обязан изучить Соглашение, все приложения к нему. При согласии с ними, Покупатель направляет Компании оферту заключить Агентский договор и стать Агентом по такому договору. Оферта считается сформированной на Платформе в момент направления Покупателем Поручения и совершения оплаты.
    9.1.2. Условия выполнения Поручения сформированы в Соглашении, Оферте и приложениях к указанным документам. Покупатель не вправе любым способом изменять указанные условия.
    9.1.3. Принятие Агентом Оферты Покупателя совершается через Платформу, с использованием функционала Личного кабинета. Для заключения Агентского договора Агент обязан изучить Поручение Покупателя, Соглашение, все приложения к нему, включая настоящие Условия. При согласии с ними, Агент принимает оферту Покупателя, и Агентский договор считается заключенным между сторонами.
    9.2. При обоюдном волеизъявлении Сторон, заключенный через Платформу Агентский договор может быть продублирован на бумажном носителе.
    `,
  },
  {
    title: "10. Порядок заключения Агентского договора через Социальные сети",
    text: ` 10.1. Заключение Агентского договора через Социальные сети происходит путем направления Оферты Покупателем в нижеуказанном порядке:
    10.1.1. Для заключения Агентского договора Покупатель обязан изучить Соглашение, все приложения к нему. При согласии с ними, Покупатель направляет Компании оферту заключить Агентский договор и стать Агентом по такому договору. Оферта считается сформированной в сообщении в Социальной сети в момент направления Покупателем Поручения и совершения оплаты.
    10.1.2. Условия выполнения Поручения сформированы в Соглашении, Оферте и приложениях к указанным документам. Покупатель не вправе любым способом изменять указанные условия.
    10.1.3. Принятие Агентом Оферты Покупателя совершается через функционал соответствующей Социальной сети, путем выставления счета на оплату (с условием его своевременной оплаты Покупателем), либо ответным сообщением о принятии заказа и т.п. После совершения указанных действий Агентский договор считается заключенным между сторонами.
    10.2. При обоюдном волеизъявлении Сторон, заключенный через Социальные сети Агентский договор может быть продублирован на бумажном носителе.
    `,
  },
  {
    title: "11. Порядок расторжения агентского договора",
    text: `11.1. Агентский договор может быть расторгнут в любое время по соглашению Сторон.
    11.2. Покупатель вправе в одностороннем внесудебном порядке отказаться от исполнения обязательств по Агентскому договору (расторгнуть договор в одностороннем порядке), в любое время после его заключения, уведомив Агента о предстоящем расторжении Договора за 2 (Два) рабочих дня до предполагаемой даты его расторжения, однако в любом случае совершения Агентом действий по приобретению Товара, указанного в Поручении.
    11.3. В том случае, если на момент направления Покупателем уведомления о предстоящем расторжении Договора в одностороннем порядке Агент еще не совершил платежную операцию по приобретению Товара, указанного Покупателем в Поручении, указанная сумма подлежит возврату в полном объеме в течение 1 (Одного) дня. В ином случае указанная сумма не подлежит возврату, как фактически понесенные расходы Агента на исполнение Поручения.
    11.4. В том случае, если на момент направления Покупателем уведомления о предстоящем расторжении Договора в одностороннем порядке Агент совершил платежную операцию по приобретению Товара, указанного Покупателем в Поручении, и Товар находится в пути на склад в Китае, то Агент производит возврат средств за вычетом 50% от комиссии агента, как фактически понесенные расходы Агента на исполнение Поручения, в течение 3 (Трех) дней.
    11.5. В том случае, если на момент направления Покупателем уведомления о предстоящем расторжении Договора в одностороннем порядке Агент совершил платежную операцию по приобретению Товара, указанного Покупателем в Поручении, и Товар прибыл на склад в Китае, но еще не был отправлен Покупателю, то Агент производит возврат средств за вычетом 50% от комиссии агента, а также стоимости обратной доставки Товара по Китаю, как фактически понесенные расходы Агента на исполнение Поручения, в течение 3 (Трех) дней.
    `,
  },
  {
    title: "12. Порядок исполнения поручения",
    text: ` 12.1. Поручение о приобретении Товара должно быть исполнено Агентом путем совершения покупки Товара в Интернет-магазине по выбору Агента. Товар должен быть полностью соответствовать Товару в Поручении. Товар должен быть приобретен Агентом в течение 3 (Трех) рабочих дней со дня заключения Агентского договора, если иной срок не согласован Сторонами.
    12.2. Покупатель также оплачивает стоимость доставки Товара до склада в Москве (Россия), указанную на Платформе в момент оплаты Товара. Доставка Товара со склада в Москве на конечный адрес Покупателя осуществля оплачивается Покупателем отдельно, и осуществляется транспортной компанией.
    12.3. Поручение Покупателя считается исполненным Агентом в полном объеме в момент доставки приобретенного Товара на склад Агента в городе Москва. Доставка Товара до конечного адреса Покупателя не входит в предмет Агентского договора, и регулируется между Покупателем и транспортной компанией отдельно.
    `,
  },
  {
    title: "13. Вознаграждение агента",
    text: ` 13.1. Вознаграждение Агента за исполнение Поручения составляет 8% (Восемь процентов) от цены Товара, и подлежит оплате Покупателем в порядке и способом, предусмотренном в Правилах совершения платежей и возврата оплаты, следующим образом:
    13.1.1. Первый платеж в размере 50% от стоимости Товара вносится в момент направления Поручения;
    13.1.2. Первый платеж в размере 50% от стоимости Товара вносится в момент поступления Товара на склад Компании, что будет подтверждаться направленным фотоотчетом.
    `,
  },
  {
    title: "14. Отчет агента",
    text: `14.1. В соответствии со ст.1008 ГК РФ, Агент направляет Покупателю информацию о ходе исполнения Поручения через Компанию, а Компания указанную информацию размещает в Личном кабинете и(или) направляет на адрес электронной почты Покупателя и(или) сообщение в Социальной сети. Такая информация признается Сторонами, как отчет Агента об исполнении Поручения (далее - Отчет).
    14.2. Покупатель вправе ознакомиться с Отчетами об исполнении всех направленных им Поручений, с указанием статуса исполнения каждого Поручения. Покупатель вправе предъявить претензии относительно размещенного Отчета в срок, не позднее 1 (Одного) календарного дня со дня предоставления Отчета, путем направления возражения относительно принятия Отчета на электронную почту Компании или по каналам технической поддержки в Социальных сетях.
    `,
  },
  {
    title: "15. Ответственность сторон",
    text: `15.1. Стороны обязуются исполнять Агентский договор добросовестно, в соответствии с его положениями, Соглашением, настоящими Условиями, и иными приложениями к нему, нормами безопасности, противодействуя любым незаконным действиям, в соответствии с нормами действующего законодательства Российской Федерации, и законодательства стран, которым подчиняется Интернет-магазин.
    15.2. Агент ни при каких обстоятельствах не несет ответственности по претензиям третьих лиц к Покупателю в связи с заключением Агентского договора. Кроме этого, Агент ни при каких обстоятельствах не несет ответственности ни перед Покупателем, ни перед третьими лицами за косвенные убытки Покупателя, в том числе, но не исключительно, потерю дохода, ожидаемой экономии, деловой репутации.
    15.3. Агент несет полную материальную ответственность за денежные средства, которые были ему перечислены Покупателем в целях приобретения Товара в Интернет-магазине, а также за Товар после его приобретения и до передачи на Склад Компании.
    15.4. В случае утраты денежных средств, переданных от Покупателя, или Товара, приобретенного в рамках Поручения, Агент обязуется возместить Покупателю реальный ущерб в полном объеме. В том случае, если возмещение причиненного Агентом ущерба было совершено Компанией, то Агент обязан возместить Компании уплаченные за Агента денежные средства в течение 1 (Одного) дня.
    `,
  },
  {
    title: "16. Направление Поручения Агенту",
    text: `16.1. Поручение формируется с использованием функционала Платформы или Социальной сети.
    16.2. Оферта на принятие Поручения считается направленной с момента успешной оплаты. Поручение должно быть принято к исполнению Агентом в течение 3 (Трех) дней со дня оплаты, о чем Покупатель будет уведомлен. В том случае, если Поручение не будет принято в указанный срок, оплата возвращается Покупателю.
    16.3. Перед тем, как Агент начнет исполнение Поручения, Покупатель обязан перечислить Агенту денежные средства в следующем размере: 1) Стоимость Товара, 2) Стоимости доставки Товара, 3) Вознаграждение Агента. Порядок совершения платежных операций установлен Правилами совершения платежей и возврата оплаты. После получения подтверждения об успешном совершении платежной операции, Агент приступает к исполнению Поручения.
    `,
  },
  {
    title: "17. Порядок изменения Соглашения",
    text: `17.1. Компания вправе изменить содержание и условия Соглашения, приложений к нему, в одностороннем порядке и в любое время. Такие изменения вступают в силу с момента их опубликования на Платформе. Последняя редакция Соглашения всегда доступна для просмотра, печати и загрузки по URL-ссылке, указанной в Соглашении.
    17.2. Компания публикует измененную версию Соглашения сразу после внесения изменений. Использование Платформы после внесения изменений в Соглашение означает согласие Пользователя со всеми внесенными изменениями.
    17.3. Компания уведомляет Пользователя об изменении Соглашения, путем отправления уведомления на адрес электронной почты, указанный при Регистрации и(или) путем публикации измененной версии Соглашения на Платформе.
    17.4. Пользователь обязуется на свой страх и риск регулярно проверять наличие изменений в Соглашении (но не реже одного раза в 14 дней), и несет все риски нарушения измененных условий Соглашения. Использование Платформы после внесения изменений в Соглашение означает согласие Пользователя со всеми внесенными изменениями.
    `,
  },
  {
    title: "18. Срок действия Соглашения",
    text: `18.1. Соглашение считается заключенным с момента выражения Пользователем согласия с условиями Соглашения, и действует до последнего из следующих событий: 1) до удаления Личного кабинета, 2) до завершения исполнения обязательств по Агентскому договору, стороной которого является Пользователь.`,
  },
  {
    title: "19. Интеллектуальная собственность",
    text: `19.1. Исключительные права на Платформу и Контент, любое их содержимое, принадлежат Компании, либо иным правообладателям. Все права на эти объекты защищены. Пользователь не вправе совершать любые действия с Платформой, Контентом и их содержимым, кроме указанных в настоящем Соглашении, приложений к нему.`,
  },
  {
    title: "20. Ответственность Компании за качество Товара",
    text: `20.1. За качество Товара несет ответственность Интернет-магазин.
    20.2. За сохранность Товара Компания от момента его приобретения Агентом в Интернет-магазине по Поручению Покупателя, и до доставки Товара Покупателю, ответственности не несет. Ответственной стороной по возмещению любого ущерба будет являться транспортная компания, которая будет осуществлять доставку Товара.`,
  },
  {
    title: "21. Доставка товара до конечного адреса",
    text: `21.1. Компания не несет никакой ответственности за доставку Товара до конечного адреса Покупателя, поскольку такая доставка осуществляется третьими лицами, за действия которых Компания не может нести ответственность. Заключая Агентский договор, при условии отправления Товара на склад Агента в Москве, Покупатель дает поручение застраховать свой Товар, на условиях соответствующих курьерских служб до склада в Москве. Стоимость страховки, а также доставки до конечного адреса Покупателя транспортной компанией, не включена в стоимость Товара, и оплата указанной суммы производится Покупателем либо в момент получении Товара непосредственно в пользу транспортной компании, либо (при условии не отправления Товара на склад Агента в Москве) до момента отправления Товара до конечного адреса Покупателя.
    21.2. Покупатель предупрежден и согласен с тем, что при доставке Товара возможны задержки. Компания не несет никакой ответственности, если такие задержки вызваны действиями / бездействиями третьих лиц.
    `,
  },
  {
    title: "22. Ограничения ответственности Компании",
    text: `22.1. Продолжая использовать Платформу, Пользователь подтверждает, что не пребывает в состоянии заблуждения (существенного или несущественного) относительно ее функционала, условий Соглашения и своих собственных действий. Пользователь принимает, что в соответствии с Соглашением Платформа для использования в указанных Соглашением пределах предоставляется «КАК ЕСТЬ», включая любые обновления. Компания не предоставляет никаких гарантий (прямых или подразумеваемых законодательством и/или обычаями делового оборота) относительно чего бы то ни было, в том числе, интегрируемости, удовлетворительного качества и годности Платформы к использованию для выполнения конкретных задач. Компания также не гарантирует, что Платформа не содержит ошибок, будет удовлетворять требованиям Пользователя, или что Платформа будет функционировать должным образом при использовании совместно с любым другим программным или аппаратным обеспечением. Компания не гарантирует и не может гарантировать результаты, которые Пользователь может получить путем использования Платформы. Все риски, связанные с качеством работы и производительностью Платформы, возлагаются на Пользователя. При этом, указанное положение не влияет на права и обязанности Сторон по Агентскому договору.
    22.2. Компания не несет ответственности за прямые, косвенные убытки или потери любого рода (включая, но не ограничиваясь, потерю дохода или прибыли, а также использование данных), возникшие при использовании Платформы
    22.3. Компания не несет ответственности за качество доступа Пользователя к сети Интернет и качеством Интернет–соединения, а также в связи с наличием/отсутствием у Пользователя оборудования и программного обеспечения для доступа в Интернет, его качеством.
    22.4. Компания не несёт ответственности за сбои или иные проблемы в работе телефонных сетей или служб, компьютерных систем, серверов или провайдеров, компьютерного или телефонного оборудования, программного обеспечения, а также за сбои в работе электронной почты или скриптов (программ).
    22.5. Компания не несет перед Пользователем никакой ответственности за убытки, вызванные возможными ошибками и опечатками на Платформе. Вместе с тем Компания обязуется принимать разумные меры для недопущения и исправления таких ошибок и опечаток.
    22.6. Компания не несет ответственности за любой сбой или задержку в исполнении своих обязательств, если задержка вызвана обстоятельствами, находящимися вне разумного контроля Компании, включая, но не ограничиваясь, следующими обстоятельствами: (1) пожар, землетрясение, шторм, наводнение, ураган, ненастная погода или другие стихийные бедствия, военные действия, терроризм, взрыв, саботаж, промышленные аварии или забастовки; (2) атаки типа «отказ в обслуживании» (DoS-атаки), сбой в электросвязи, аппаратный сбой или сбой программного обеспечения, предоставляемого третьей стороной, для функционирования в соответствии с его спецификациями; (3) необычно высокий спрос на Платформу, приводящий к неспособности программного или аппаратного обеспечения функционировать должным образом; (4) неспособность какой-либо третьей стороны (включая, помимо прочего, любой банк или другое финансовое учреждение) выполнить какие-либо обязательства перед Компанией; (5) любые другие обстоятельства или события, находящиеся за пределами разумного контроля Компании, включая задержку исполнения обязательств третьими лицами (например, банками, иными финансовыми организациями); (6) введение ограничительных мер правительством государств, препятствующих исполнению обязательств по Агентскому договору (как то, санкции, в частности против банков; отключение международных систем финансовых сообщений (SWIFT) и т. д.).
    `,
  },
  {
    title: "23. Ответственность Пользователя",
    text: `23.1. Пользователь не вправе использовать Платформу в нарушение Соглашения.
    23.2. Пользователь не вправе распространять, продавать, переводить, модифицировать, осуществлять обратный инжиниринг или выполнять обратную компиляцию или декомпиляцию, дизассемблирование или создание производных работ от Платформы.
    23.3. Пользователь не вправе осуществлять попыток получить несанкционированный доступ к другим компьютерным системам или сетям, к которым подключена Платформа.
    23.4. Пользователь не вправе вмешиваться и предпринимать действия, которые приведут к вмешательству или нарушению работы Платформы, серверов, на которых размещена Платформа.
    23.5. Пользователь не вправе использовать любые технологии фрейминга, используя материалы Платформы, любые мета–теги, рекламную модель «плати за клик» (pay–per–click), любой «скрытый текст», deeplink–ссылки, ссылаясь на Платформу.
    23.6. Пользователь не вправе обходить любое шифрование или другие средства безопасности, используемые на Платформе.
    23.7. Пользователь не вправе использовать технологии «дата майнинг» (data mining), «скрапинг» (scraping) или аналогичные инструменты сбора и извлечения данных с Платформы.
    23.8. Пользователь не вправе продавать, сдавать в аренду, передавать, распространять, использовать в качестве оказания услуг или иным образом передавать третьим лицам доступ к использованию Платформы, который предоставлен Пользователю по условиям настоящего Соглашения.
    23.9. Пользователь не вправе вносить какие-либо изменения в исходный код Платформы и его составляющие и(или) осуществлять действия, которые могут отрицательно повлиять на корректную работу Платформы, а также репутацию и доброе имя Компании, ее руководителей, сотрудников, клиентов и других пользователей.
    23.10. Пользователь не вправе передавать доступ к своему Личному кабинету другим пользователям или третьим лицам.
    23.11. Пользователь не вправе совершать относительно Платформы другие действия, нарушающие нормы применимого права, а также международные нормы законодательства об авторском праве и использовании программных средств.
    `,
  },
  {
    title: "24. Применимое право и разрешение споров",
    text: `24.1. Соглашение регулируется и трактуется в соответствии с законодательством Российской Федерации.
    24.2. Любые споры и разногласия, вытекающие из Соглашения, в том числе касающихся его исполнения, нарушения, прекращения или недействительности, в том числе те, которые рассматриваются в качестве таковых только одной из Сторон, подлежат урегулированию в претензионном порядке.
    24.3. Срок рассмотрения и ответа на претензию установлен не более 20 (Двадцати) рабочих дней с момента ее официального поступления адресату.
    24.4. Все споры, вытекающие из настоящего Соглашения или связанные с ним или его действительностью, разрешаются сторонами окончательно в Арбитражном суде города Москвы, а при споре с потребителем - в компетентном суде в соответствии с гражданским процессуальным правом Российской Федерации.
    `,
  },
  {
    title: "25. Совершение платежей",
    text: `25.1. Совершение платежных операций на Платформе происходит в порядке и на условиях, указанных в Правилах совершения платежей и возврата оплаты.
    25.2. Пользователь обязуется самостоятельно нести ответственность по уплате всех налогов и сборов, и признает, что Компания ни при каких обстоятельствах не выступает его налоговым агентом.
    `,
  },
  {
    title: "26. Заключительные положения",
    text: `26.1. Все ссылки на Платформу, указанные в Соглашении, как и содержащаяся по этим ссылкам информация, признается неотъемлемой составной частью настоящего Соглашения.
    26.2. Признание любого положения настоящего Соглашения недействительным, либо неисполнимым и его аннулирование не должно затрагивать остальных его положений, и такое недействительное/неисполнимое положение подлежит замене действительным/исполнимым и юридически значимым положением, максимально приближенным по своему экономическому содержанию, смыслу и эффекту к первоначальной редакции Соглашения.
    26.3. Пользователь не вправе передавать свои обязанности и(или) права по Соглашению или заключенному Агентскому договору третьим лицам без письменного согласования с Компанией или Покупателем соответственно. Компания вправе передавать свои обязанности и(или) права по Соглашению или заключенному Агентскому договору третьим лицам без ограничений, и без необходимости получения согласия от Пользователя и(или) иных третьих лиц.
    26.4. Стороны признают, что вся электронная переписка, совершаемая между Сторонами в ходе исполнения Соглашения, Агентского договора, имеет юридическую силу, признается Сторонами в качестве составляющей части Соглашения и может использоваться в качестве письменного доказательства при разрешении возникающих споров.
    26.5. Все документы, направленные с использованием электронной почты, телефонов (включая мессенджеры), считаются подписанными с использованием простой электронной цифровой подписи, а также имеющими достоверный цифровой след Стороны-отправителя, и равнозначны письменному документу.
    26.6. Стороны договорились о возможности использования факсимильного воспроизведения подписи с помощью средств механического или иного копирования (факсимильная подпись) в целях исполнения Соглашения. Стороны признают, что факсимильная подпись имеет равную юридическую силу с собственноручной подписью.
    `,
  },
];
</script>
